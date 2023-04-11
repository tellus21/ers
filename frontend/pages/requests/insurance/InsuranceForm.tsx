import { ExamFormBase } from '@/pages/exams/components/ExamFormBase'
import { useInsurance } from './useInsurance'
import { TitleText } from '@/pages/exams/components/TitleText'
import { ExamFieldsFourTwelve } from '@/pages/exams/components/ExamFieldsFourTwelve'

export function InsuranceForm() {
    const { logicalName, resource, form, fields } = useInsurance()

    return (
        <ExamFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            <ExamFieldsFourTwelve form={form} fields={fields} />
        </ExamFormBase>
    )
}
