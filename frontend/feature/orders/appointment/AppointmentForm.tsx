import { Box, Divider, Group, Text, Button, createStyles } from '@mantine/core'

import { OrderFormBase } from '../components/OrderFormBase'
import { TitleText } from '../components/TitleText'
import { FieldsEightTwelve } from '../components/FieldsEightTwelve'
import axios from 'axios'
import { MedicalInformationSheet } from './components/MedicalInformationSheet'
import { DisplayPickUpTimeList } from './components/DisplayPickUpTimeList'
import { DisplayPickUpDistanceList } from './components/DisplayPickUpDistanceList'
import { useAtomValue } from 'jotai'

import { API_URL, ProgressStatus } from '@/common/constants'
import { notifications } from '@mantine/notifications'
import { editedInstructionAtom, editedOrderAtom } from '@/common/contexts'

const useStyles = createStyles((theme) => ({
    label: { fontSize: theme.fontSizes.xs, color: theme.colors.gray[7] },
    data: {
        fontSize: theme.fontSizes.md,
        borderBottom: '1px solid #cccccc',
    },
}))

interface AppointmentFormProps {
    logicalName: string
    resource: any
    form: any
    query: any
    fields: any
}

export function AppointmentForm({
    logicalName,
    resource,
    form,
    query,
    fields,
}: AppointmentFormProps) {
    const { classes } = useStyles()
    //将来的に送迎時間更新をする時に使う
    const editedInstruction = useAtomValue(editedInstructionAtom)
    const editedOrder = useAtomValue(editedOrderAtom)

    const onclickButton = () => {
        console.log(editedInstruction.id)
    }
    const onClickFaxButton = () => {
        if (
            editedOrder.progress_status !== ProgressStatus.RESERVATION_CONFIRMED
        ) {
            notifications.show({
                title: 'FAX印刷エラー',
                message: '「予約確定」中にしかFAX印刷はできません。🤔',
                color: 'red',
            })
            return
        }

        axios
            .get(`${API_URL}/appointments/2/download_fax`, {
                responseType: 'arraybuffer',
            })
            .then((response) => {
                const url = window.URL.createObjectURL(
                    new Blob([response.data], {
                        type: response.headers['content-type'],
                    })
                )
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'fax.xlsx')
                document.body.appendChild(link)
                link.click()
            })
    }

    return (
        <OrderFormBase resource={resource} form={form} query={query}>
            <TitleText title={logicalName} />
            <Box px={12}>
                {/* 送迎時間 */}
                <Group position="right">
                    <Button
                        color="gray.6"
                        onClick={() => console.log(form.values.user.last_name)}
                    >
                        fff
                    </Button>
                    <Text size="md"></Text>
                    <Text size="sm">予約記載者：</Text>

                    <Text className={classes.data}>
                        {`${editedOrder.user!.last_name}　${
                            editedOrder.user!.first_name
                        }`}
                    </Text>
                </Group>
                <DisplayPickUpTimeList />
                <DisplayPickUpDistanceList />

                {/* 診察関連 */}
                <Divider label="診察関連" />
                <Group position="right">
                    <Button color="gray.6" onClick={onClickFaxButton}>
                        診情印刷
                    </Button>
                </Group>
                <FieldsEightTwelve form={form} fields={fields.examination} />

                {/* 送迎関連 */}
                <Divider label="送迎関連" />
                <Group position="right">
                    <Group>
                        <MedicalInformationSheet />
                        <Button color="gray.6" onClick={onClickFaxButton}>
                            問診印刷
                        </Button>
                    </Group>
                </Group>
                <FieldsEightTwelve form={form} fields={fields.pickUp} />

                {/* FAX関連 */}
                <Divider label="FAX関連" />
                <Group position="right">
                    <Button color="gray.6" onClick={onClickFaxButton}>
                        FAX印刷
                    </Button>
                </Group>
                <FieldsEightTwelve form={form} fields={fields.fax} />
            </Box>
        </OrderFormBase>
    )
}
