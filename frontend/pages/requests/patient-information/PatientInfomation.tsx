import { Box } from '@mantine/core'
import { RequestFormBase } from '../components/RequestFormBase'
import { TitleText } from '../components/TitleText'
import { FieldsFourTwelve } from '../components/FieldsFourTwelve'

interface PatientInfomationProps {
    resource: any
    form: any
    fields: any
}

export function PatientInfomation({
    resource,
    form,
    fields,
}: PatientInfomationProps) {
    return (
        <RequestFormBase resource={resource} form={form}>
            <Box m={12}>
                <TitleText title={'患者'} />
                <FieldsFourTwelve form={form} fields={fields} />
            </Box>
            ここに患者情報
        </RequestFormBase>
    )
}
