import { Box, Divider, Group, Text, Button, Space } from '@mantine/core'

import { OrderFormBase } from '../components/OrderFormBase'
import { TitleText } from '../components/TitleText'
import { FieldsEightTwelve } from '../components/FieldsEightTwelve'
import axios from 'axios'
import { MedicalInformationSheet } from './components/MedicalInformationSheet'
import { DisplayPickUpTimeList } from './components/DisplayPickUpTimeList'
import { DisplayPickUpDistanceList } from './components/DisplayPickUpDistanceList'
import { useAtomValue } from 'jotai'
import {
    editedInstructionAtom,
    editedOrderAtom,
} from '../contexts/orderContexts'
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
    //将来的に更新時間をする時に使う
    const editedInstruction = useAtomValue(editedInstructionAtom)
    const onclickButton = () => {
        console.log(editedInstruction.id)
    }
    const onClickFaxButton = () => {
        axios
            .get(`http://localhost:8000/api/appointments/2/download_fax`, {
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
                    <Button color="gray.6" onClick={onclickButton}>
                        fff
                    </Button>
                    <Text size="md"></Text>
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
                <Group position="apart">
                    <Text size="xs" color="red">
                        ※予定確定日後に「更新」を行うと、ステータスが「予約確定」になります。
                    </Text>
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
