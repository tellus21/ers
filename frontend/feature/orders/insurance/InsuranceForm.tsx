import { Box } from '@mantine/core'
import { OrderFormBase } from '../components/OrderFormBase'
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
        <OrderFormBase resource={resource} form={form} query={query}>
            <Box m={12}>
                <TitleText title={logicalName} />
                <FieldsFourTwelve form={form} fields={fields} />
            </Box>
        </OrderFormBase>
    )
}
