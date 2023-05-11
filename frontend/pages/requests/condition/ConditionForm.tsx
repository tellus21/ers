import { Box, Button, Group } from '@mantine/core'
import { TitleText } from '../components/TitleText'
import { RequestFormBase } from '../components/RequestFormBase'
import { FieldsFourTwelve } from '../components/FieldsFourTwelve'

interface ConditionFormProps {
    logicalName: string
    resource: any
    form: any
    query: any
    fields: any
}

export function ConditionForm({
    logicalName,
    resource,
    form,
    query,
    fields,
}: ConditionFormProps) {
    return (
        <RequestFormBase resource={resource} form={form} query={query}>
            <TitleText title={logicalName} />
            <Group position="apart">
                <Button>在宅システム検索</Button>
                <Button>前回の患者状況を引き継ぐ</Button>
            </Group>
            <FieldsFourTwelve form={form} fields={fields.condition_1} />
            <Box p={8} />
            <FieldsFourTwelve form={form} fields={fields.condition_2} />
        </RequestFormBase>
    )
}
