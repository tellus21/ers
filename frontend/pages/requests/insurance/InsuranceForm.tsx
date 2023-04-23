import { RequestFormBase } from '@/pages/requests/components/RequestFormBase'
import { useInsurance } from './useInsurance'
import { TitleText } from '@/pages/requests/components/TitleText'
import { FieldsFourTwelve } from '@/pages/requests/components/FieldsFourTwelve'
import { Box } from '@mantine/core'

export function InsuranceForm() {
    const { logicalName, resource, form, fields } = useInsurance()

    return (
        <RequestFormBase resource={resource} form={form}>
            <Box m={12}>
                <TitleText title={logicalName} />
                <FieldsFourTwelve form={form} fields={fields} />
            </Box>
        </RequestFormBase>
    )
}
