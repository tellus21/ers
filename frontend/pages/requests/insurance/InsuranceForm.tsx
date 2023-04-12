import { ExamFormBase } from '@/pages/requests/components/ExamFormBase'
import { useInsurance } from './useInsurance'
import { TitleText } from '@/pages/requests/components/TitleText'
import { ExamFieldsFourTwelve } from '@/pages/requests/components/ExamFieldsFourTwelve'

export function InsuranceForm() {
    const { logicalName, resource, form, fields } = useInsurance()

    return (
        <ExamFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            <ExamFieldsFourTwelve form={form} fields={fields} />
        </ExamFormBase>
    )
}
