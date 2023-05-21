import { Button, Group, Paper, Text } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { editedRequestAtom } from '../contexts/requestContexts'

// リクエストのメタデータを表示するコンポーネント
export function RequestMetaData() {
    const editedRequest: any = useAtomValue(editedRequestAtom)
    const bgColorMap: { [key: string]: string } = {
        依頼中: 'blue.1',
        予約確定: 'red.1',
        保留中: 'green.1',
    }

    return (
        <Group position="apart">
            <Group>
                <Button variant="outline" color="blue" size="sm">
                    保留にする
                </Button>
                <Paper p={4} bg={bgColorMap[editedRequest.progress_status]}>
                    {editedRequest.progress_status}
                </Paper>
                <Text size="md" td="underline">
                    No. {editedRequest.id}
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
                    {editedRequest.user && (
                        <Text size="md" td="underline">
                            {editedRequest.user.last_name}{' '}
                            {editedRequest.user.first_name}
                        </Text>
                    )}
                </Group>
            </Group>
        </Group>
    )
}
