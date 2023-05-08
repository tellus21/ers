import { RequestFormBase } from '@/pages/requests/components/RequestFormBase'
import { TitleText } from '@/pages/requests/components/TitleText'
import { FieldsFourTwelve } from '@/pages/requests/components/FieldsFourTwelve'
import { Box } from '@mantine/core'
import { useInsuranceFeature } from './insuranceFeature'

export function InsuranceForm() {
    const { logicalName, resource, form, query, fields } = useInsuranceFeature()

    return (
        <RequestFormBase resource={resource} form={form} query={query}>
            <Box m={12}>
                <TitleText title={logicalName} />
                <FieldsFourTwelve form={form} fields={fields} />
            </Box>
        </RequestFormBase>
    )
}
