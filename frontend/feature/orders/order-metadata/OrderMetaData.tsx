import { Button, Group, Paper, Text } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { editedOrderAtom } from '../contexts/orderContexts'

// リクエストのメタデータを表示するコンポーネント
export function OrderMetaData() {
    const editedOrder: any = useAtomValue(editedOrderAtom)
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
                <Paper p={4} bg={bgColorMap[editedOrder.progress_status]}>
                    {editedOrder.progress_status}
                </Paper>
                <Text size="md" td="underline">
                    No. {editedOrder.id}
                </Text>
            </Group>

            <Group>
                <Group>
                    <Text size="md">作成日：</Text>
                    <Text size="md" td="underline">
                        {editedOrder.created_at}
                    </Text>
                </Group>

                <Group>
                    <Text size="md">最終更新日：</Text>
                    <Text size="md" td="underline">
                        {editedOrder.updated_at}
                    </Text>
                </Group>

                <Group>
                    <Text size="md">作成者：</Text>
                    {editedOrder.user && (
                        <Text size="md" td="underline">
                            {editedOrder.user.last_name}{' '}
                            {editedOrder.user.first_name}
                        </Text>
                    )}
                </Group>
            </Group>
        </Group>
    )
}
