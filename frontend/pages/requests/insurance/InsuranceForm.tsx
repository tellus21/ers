import { RequestFormBase } from '@/pages/requests/components/RequestFormBase'
import { useInsurance } from './useInsurance'
import { TitleText } from '@/pages/requests/components/TitleText'
import { RequestFieldsFourTwelve } from '@/pages/requests/components/RequestFieldsFourTwelve'
import { Box } from '@mantine/core'

export function InsuranceForm() {
    const { logicalName, resource, form, fields } = useInsurance()

    return (
        <RequestFormBase resource={resource} form={form}>
            <Box m={12}>
                <TitleText title={logicalName} />
                <RequestFieldsFourTwelve form={form} fields={fields} />
            </Box>
        </RequestFormBase>
    )
}
