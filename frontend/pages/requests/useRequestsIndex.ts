import { useRequestFeature } from './requestFeature'
import { useDisclosure } from '@mantine/hooks'

// Requestのindexを使用するためのカスタムフック
export const useRequestsIndex = () => {
    // Requestから論理名、列、クエリを取得
    const { logicalName, columns, query } = useRequestFeature()

    // Request作成モーダルを開閉するための状態を保持
    const [createRequestModalOpend, createRequestModalHandlers] =
        useDisclosure(false)

    // Request編集モーダルを開閉するための状態を保持
    const [editRequestModalOpend, editRequestModalHandlers] =
        useDisclosure(false)

    return {
        logicalName,
        columns,
        query,
        createRequestModalOpend,
        createRequestModalHandlers,
        editRequestModalOpend,
        editRequestModalHandlers,
    }
}
