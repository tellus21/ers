import { Box, Button, Center, Space } from '@mantine/core'
import { TitleText } from '../components/TitleText'
import { useCondition } from './useCondition'
import { RequestFormBase } from '../components/RequestFormBase'
import { RequestFieldsFourTwelve } from '../components/RequestFieldsFourTwelve'

export function ConditionForm() {
    const { logicalName, resource, form, fields } = useCondition()

    return (
        <RequestFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            <Center>
                <Button>在宅システム検索</Button>
            </Center>
            <RequestFieldsFourTwelve form={form} fields={fields.condition_1} />
            <Box p={8} />
            <RequestFieldsFourTwelve form={form} fields={fields.condition_2} />
        </RequestFormBase>
    )
}
