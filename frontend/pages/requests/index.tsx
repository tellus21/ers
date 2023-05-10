import { createContext } from 'react'
import { Button, Container, Group, Text } from '@mantine/core'
import { DataTableBase } from '../components/DataTableBase'
import { EditRequestModal } from './request/EditRequestModal'
import { CreateRequestModal } from './request/CreateRequestModal'
import { useRequestsIndex } from './useRequestsIndex'
import { Provider } from 'jotai'

// ReactのContext APIを使用して、編集中の依頼と指示を保持するためのコンテキストを作成
export const EditedRequestContext = createContext({})
export const EditedInstructContext = createContext({})

export default function Index() {
    // 依頼一覧に関する情報を取得
    const {
        logicalName,
        columns,
        query,
        createRequestModalOpend,
        createRequestModalHandlers,
        editRequestModalOpend,
        editRequestModalHandlers,
    } = useRequestsIndex()

    // テーブルの行がクリックされた時の処理
    const onTableRowClick = (rowData: any) => {
        editRequestModalHandlers.open()
        console.log(rowData)
    }

    return (
        <Provider>
            <Container size="xl">
                <Text size="md">{`${logicalName}一覧`}</Text>

                {/* 依頼登録ボタンを表示 */}
                <Group position="right">
                    <Button size="sm" onClick={createRequestModalHandlers.open}>
                        {'患者検索'}
                    </Button>
                </Group>

                {/* 依頼作成(患者検索モーダル)を表示 */}
                <CreateRequestModal
                    opened={createRequestModalOpend}
                    close={createRequestModalHandlers.close}
                    editRequestModalHandlersOpen={editRequestModalHandlers.open}
                />

                {/* 依頼一覧テーブルを表示 */}
                <DataTableBase
                    columns={columns}
                    records={query}
                    onRowClick={(rowData) => onTableRowClick(rowData)}
                />

                {/* 依頼編集モーダルを表示 */}
                <EditRequestModal
                    opened={editRequestModalOpend}
                    close={editRequestModalHandlers.close}
                />
            </Container>
        </Provider>
    )
}
