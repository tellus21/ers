import { Badge, Group, Text } from '@mantine/core'

interface RequestMetaDataProps {
    form: any
    // request: Request
}

export function RequestMetaData({ form }: RequestMetaDataProps) {
    return (
        <Group position="right">
            <button onClick={() => console.log(form.values)}>dd</button>
            <Badge size="lg">予約進行中</Badge>

            <Group>
                <Text size="md">作成日：</Text>
                <Text size="md" td="underline">
                    {/* {form.values.created_at} */}
                </Text>
            </Group>

            <Group>
                <Text size="md">最終更新日：</Text>
                <Text size="md" td="underline">
                    2023年5月5日
                </Text>
            </Group>

            <Group>
                <Text size="md">作成者：</Text>
                <Text size="md" td="underline">
                    ひがし在宅
                </Text>
                <Text size="md" td="underline">
                    田中将大
                </Text>
            </Group>
        </Group>
    )
}
