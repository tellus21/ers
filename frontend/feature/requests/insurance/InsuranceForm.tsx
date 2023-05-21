import { Box } from '@mantine/core'
import { RequestFormBase } from '../components/RequestFormBase'
import { TitleText } from '../components/TitleText'
import { FieldsFourTwelve } from '../components/FieldsFourTwelve'

interface InsuranceFormProps {
    logicalName: string
    resource: any
    form: any
    query: any
    fields: any
}

export function InsuranceForm({
    logicalName,
    resource,
    form,
    query,
    fields,
}: InsuranceFormProps) {
    return (
        <RequestFormBase resource={resource} form={form} query={query}>
            <Box m={12}>
                <TitleText title={logicalName} />
                <FieldsFourTwelve form={form} fields={fields} />
            </Box>
        </RequestFormBase>
    )
}
