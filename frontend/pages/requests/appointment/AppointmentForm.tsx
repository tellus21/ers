import { RequestFormBase } from '@/pages/requests/components/RequestFormBase'
import { TitleText } from '@/pages/requests/components/TitleText'
import { FieldsEightTwelve } from '@/pages/requests/components/FieldsEightTwelve'
import { Box, Divider, Group, Text } from '@mantine/core'
import { DisplayPickUpTimeList } from './components/DisplayPickUpTimeList'
import { useAppointmentFeature } from './appointmentFeature'

const homeClinicsTest = [
    { name: 'スマイル', time: '10分' },
    { name: 'ひがし', time: '20分' },
    { name: 'ことに', time: '30分' },
    { name: 'きた', time: '100分' },
    { name: 'きた高速', time: '50分' },
]

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
    return (
        <RequestFormBase resource={resource} form={form} query={query}>
            <TitleText title={logicalName} />
            <Box px={12}>
                <Group position="apart">
                    <DisplayPickUpTimeList homeClinics={homeClinicsTest} />
                    <Text size="md">最終更新日：〇〇、記載者：〇〇</Text>
                </Group>
                {/* 診察関連 */}
                <Divider label="診察関連" />
                <FieldsEightTwelve form={form} fields={fields.examination} />
                {/* 送迎関連 */}
                <Divider label="送迎関連" />
                <FieldsEightTwelve form={form} fields={fields.pickUp} />
                {/* FAX関連 */}
                <Divider label="FAX関連" />
                <FieldsEightTwelve form={form} fields={fields.fax} />
            </Box>
        </RequestFormBase>
    )
}
