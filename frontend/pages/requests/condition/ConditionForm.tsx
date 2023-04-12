import { Box } from '@mantine/core'
import { TitleText } from '../components/TitleText'
import { useCondition } from './useCondition'
import { RequestFormBase } from '../components/RequestFormBase'
import { RequestFieldsFourTwelve } from '../components/RequestFieldsFourTwelve'

export function ConditionForm() {
    const { logicalName, resource, form, fields } = useCondition()

    return (
        <RequestFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            <RequestFieldsFourTwelve form={form} fields={fields.first} />
            <Box p={5} />

            <RequestFieldsFourTwelve form={form} fields={fields.second} />
        </RequestFormBase>
    )
}
