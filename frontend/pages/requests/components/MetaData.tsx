import { Badge, Group, Text } from '@mantine/core'

export function RequestMetaData() {
    return (
        <Group position="right">
            <Badge size="lg">予約進行中</Badge>

            <Group>
                <Text size="md">作成日：</Text>
                <Text size="md" td="underline">
                    2023年5月5日
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
