import { ExamFormBase } from '../components/ExamFormBase'
import { ExamFieldsFourTwelve } from '../components/ExamFieldsFourTwelve'
import { TitleText } from '../components/TitleText'
import { useInsurance } from './useInsurance'

export function InsuranceForm() {
    const { logicalName, resource, form, fields } = useInsurance()

    return (
        <ExamFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            <ExamFieldsFourTwelve form={form} fields={fields} />
        </ExamFormBase>
    )
}
