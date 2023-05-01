import { Box, Button, Group } from '@mantine/core'
import { TitleText } from '../components/TitleText'
import { useCondition } from './useCondition'
import { RequestFormBase } from '../components/RequestFormBase'
import { FieldsFourTwelve } from '../components/FieldsFourTwelve'

export function ConditionForm() {
    const { logicalName, resource, form, fields } = useCondition()

    return (
        <RequestFormBase resource={resource} form={form}>
            <TitleText title={logicalName} />
            <Group position="apart">
                <Button>在宅システム検索</Button>
                <Button>前回の患者状況を引き継ぐ</Button>
            </Group>
            <FieldsFourTwelve form={form} fields={fields.condition_1} />
            <Box p={8} />
            {/* <FieldsFourTwelve form={form} fields={fields.condition_2} /> */}
        </RequestFormBase>
    )
}
