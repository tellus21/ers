import { Box } from '@mantine/core'
import { ExamFormBase } from '../components/ExamFormBase'
import { ExamFieldsFourTwelve } from '../components/ExamFieldsFourTwelve'
import { TitleText } from '../components/TitleText'
import { useCondition } from './useCondition'

export function ConditionForm() {
    const { logicalName, resource, form, fields } = useCondition()

    return (
        <ExamFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            <ExamFieldsFourTwelve form={form} fields={fields.first} />
            <Box p={5} />

            <ExamFieldsFourTwelve form={form} fields={fields.second} />
        </ExamFormBase>
    )
}
