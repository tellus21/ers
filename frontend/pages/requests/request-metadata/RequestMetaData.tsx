import { Badge, Group, Text } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { editedRequestAtom } from '../../../common/contexts'

// リクエストのメタデータを表示するコンポーネント
export function RequestMetaData() {
    const editedRequest = useAtomValue(editedRequestAtom)

    return (
        <Group position="apart">
            <Group>
                <Badge size="lg">予約進行中</Badge>
                <Text size="md">依頼番号：</Text>
                <Text size="md" td="underline">
                    {editedRequest.id}
                </Text>
            </Group>

            <Group>
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
        </Group>
    )
}
