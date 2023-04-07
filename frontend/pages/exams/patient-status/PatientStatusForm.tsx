import { Box } from '@mantine/core'
import { ExamFormBase } from '../components/ExamFormBase'
import { ExamFieldsFourTwelve } from '../components/ExamFieldsFourTwelve'
import { TitleText } from '../components/TitleText'
import { usePatientStatus } from './usePatientStatus'

export function PatientStatusForm() {
    const { logicalName, feature, form, fields } = usePatientStatus()

    return (
        <ExamFormBase feature={feature} form={form}>
            <TitleText title={logicalName} />
            <ExamFieldsFourTwelve form={form} fields={fields.first} />
            {/* 感染症のとこ状況でいろいろやる必要あるので分けた、なければわけなくてよい */}
            <Box p={5} />
            <ExamFieldsFourTwelve form={form} fields={fields.second} />
        </ExamFormBase>
    )
}
