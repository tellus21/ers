import { Badge, Group, Text } from '@mantine/core'
import { useContext } from 'react'
import { EditedRequestContext } from '..'

interface RequestMetaDataProps {}

// リクエストのメタデータを表示するコンポーネント
export function RequestMetaData({}: RequestMetaDataProps) {
    const { editedRequest } = useContext(EditedRequestContext)

    return (
        <Group position="right">
            <Badge size="lg">予約進行中</Badge>

            <Group>
                <Text size="md">作成日：</Text>
                <Text size="md" td="underline">
                    {editedRequest.created_at}
                </Text>
            </Group>

            <Group>
                <Text size="md">最終更新日：</Text>
                <Text size="md" td="underline">
                    {editedRequest.updated_at}
                </Text>
            </Group>

            <Group>
                <Text size="md">作成者：</Text>
                <Text size="md" td="underline">
                    {editedRequest.user_id}
                </Text>
                <Text size="md" td="underline">
                    {editedRequest.id}
                </Text>
            </Group>
        </Group>
    )
}
