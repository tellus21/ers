import { Group, Paper, Text } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { convertIso8601ToDate } from '@/common/lib'
import { editedOrderAtom } from '@/common/contexts'

// リクエストのメタデータを表示するコンポーネント
export function OrderMetaData() {
    const editedOrder = useAtomValue(editedOrderAtom)
    // const editedOrder: any = useAtomValue(eddditedOrderAtom)
    const bgColorMap: { [key: string]: string } = {
        依頼中: 'yellow.2',
        予約中: 'blue.2',
        予約確定: 'cyan.2',
        依頼者チェック済: 'violet.2',
        保留: 'green.2',
        中止: 'gray.2',
    }

    return (
        <Group>
            <Group>
                <Paper
                    px={12}
                    py={4}
                    bg={bgColorMap[editedOrder.progress_status]}
                >
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
                        {editedOrder.created_at
                            ? convertIso8601ToDate(editedOrder.created_at)
                            : ''}
                    </Text>
                </Group>

                <Group>
                    <Text size="md">最終更新日：</Text>
                    <Text size="md" td="underline">
                        {editedOrder.updated_at
                            ? convertIso8601ToDate(editedOrder.updated_at)
                            : ''}
                    </Text>
                </Group>

                <Group>
                    <Text size="md">作成者：</Text>
                    {editedOrder.user && (
                        <Text size="md" td="underline">
                            {`${editedOrder.user.last_name}　${editedOrder.user.first_name}`}
                        </Text>
                    )}
                </Group>
            </Group>
        </Group>
    )
}
