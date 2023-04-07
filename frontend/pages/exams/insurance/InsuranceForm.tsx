import { ExamFormBase } from '../components/ExamFormBase'
import { ExamFieldsFourTwelve } from '../components/ExamFieldsFourTwelve'
import { TitleText } from '../components/TitleText'
import { useInsurance } from './useInsurance'

export function InsuranceForm() {
    const { logicalName, feature, form, fields } = useInsurance()

    return (
        <ExamFormBase feature={feature} form={form}>
            <TitleText title={logicalName} />
            <ExamFieldsFourTwelve form={form} fields={fields} />
        </ExamFormBase>
    )
}
