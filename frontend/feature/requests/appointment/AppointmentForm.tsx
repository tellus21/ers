import { Box, Divider, Group, Text, Button } from '@mantine/core'
import { DisplayPickUpTimes } from './components/DisplayPickUpTimeList'
import { RequestFormBase } from '../components/RequestFormBase'
import { TitleText } from '../components/TitleText'
import { FieldsEightTwelve } from '../components/FieldsEightTwelve'
import axios from 'axios'

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
        <RequestFormBase resource={resource} form={form} query={query}>
            <TitleText title={logicalName} />
            <Box px={12}>
                <Group position="apart">
                    {/* 送迎時間 */}
                    <DisplayPickUpTimes />
                    <Text size="md">最終更新日：〇〇、記載者：〇〇</Text>
                </Group>
                {/* 診察関連 */}
                <Divider label="診察関連" />
                <FieldsEightTwelve form={form} fields={fields.examination} />
                {/* 送迎関連 */}
                <Divider label="送迎関連" />
                <Group position="apart">
                    <Text size="xs" color="red">
                        ※予定確定日後に「更新」を行うと、ステータスが「予約確定」になります。
                    </Text>
                    <Group>
                        <Button color="gray.6" onClick={onClickFaxButton}>
                            診情作成
                        </Button>
                        <Button color="gray.6" onClick={onClickFaxButton}>
                            診情印刷
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
        </RequestFormBase>
    )
}
