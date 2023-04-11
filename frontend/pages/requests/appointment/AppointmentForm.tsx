import { ExamFormBase } from '@/pages/exams/components/ExamFormBase'
import { useAppointment } from './useAppointment'
import { TitleText } from '@/pages/exams/components/TitleText'
import { ExamFieldsEightTwelve } from '@/pages/exams/components/ExamFieldsEightTwelve'
import { Divider } from '@mantine/core'

export function AppointmentForm() {
    const { logicalName, resource, form, fields } = useAppointment()

    return (
        <ExamFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            {/* メタデータ */}
            記載日：○○、記載者：○○
            {/* 診察関連 */}
            <Divider label="診察関連" />
            <ExamFieldsEightTwelve form={form} fields={fields.examination} />
            {/* 送迎関連 */}
            <Divider label="送迎関連" />
            <ExamFieldsEightTwelve form={form} fields={fields.pickUp} />
            {/* FAX関連 */}
            <Divider label="FAX関連" />
            発信者：○○
            <ExamFieldsEightTwelve form={form} fields={fields.fax} />
        </ExamFormBase>
    )
}
