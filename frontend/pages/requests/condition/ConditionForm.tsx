import { Box } from '@mantine/core'
import { ExamFormBase } from '../../exams/components/ExamFormBase'
import { ExamFieldsFourTwelve } from '../../exams/components/ExamFieldsFourTwelve'
import { TitleText } from '../../exams/components/TitleText'
import { usePatientStatus } from './useCondition'

export function PatientStatusForm() {
    const { logicalName, resource, form, fields } = usePatientStatus()

    return (
        <ExamFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            <ExamFieldsFourTwelve form={form} fields={fields.first} />
            {/* 感染症のとこ状況でいろいろやる必要あるので分けた、なければわけなくてよい */}
            <Box p={5} />
            <ExamFieldsFourTwelve form={form} fields={fields.second} />
        </ExamFormBase>
    )
}
