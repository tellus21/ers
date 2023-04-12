import { RequestFormBase } from '@/pages/requests/components/RequestFormBase'
import { useAppointment } from './useAppointment'
import { TitleText } from '@/pages/requests/components/TitleText'
import { RequestFieldsEightTwelve } from '@/pages/requests/components/RequestFieldsEightTwelve'
import { Divider } from '@mantine/core'

export function AppointmentForm() {
    const { logicalName, resource, form, fields } = useAppointment()

    return (
        <RequestFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            最終更新日、記載者：○○
            {/* 診察関連 */}
            <Divider label="診察関連" />
            <RequestFieldsEightTwelve form={form} fields={fields.examination} />
            {/* 送迎関連 */}
            <Divider label="送迎関連" />
            <RequestFieldsEightTwelve form={form} fields={fields.pickUp} />
            {/* FAX関連 */}
            <Divider label="FAX関連" />
            <RequestFieldsEightTwelve form={form} fields={fields.fax} />
        </RequestFormBase>
    )
}
