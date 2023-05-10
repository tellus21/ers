import { useRequestFeature } from './requestFeature'
import { useDisclosure } from '@mantine/hooks'
import { useSetAtom } from 'jotai'
import { editedRequestAtom } from '../../common/contexts'
import { useConditionFeature } from './condition/conditionFeature'

// Requestのindexを使用するためのカスタムフック
export const useRequestsIndex = () => {
    // Requestから論理名、列、クエリを取得
    const { logicalName, columns, query: requests } = useRequestFeature()

    // 編集中のRequestを変更する関数を取得
    const setEditedRequest = useSetAtom(editedRequestAtom)

    //ここからやる！！！！
    // //Conditionを取得する
    // const { query: conditions } = useConditionFeature()

    // Request作成モーダルを開閉するための状態を保持
    const [createRequestModalOpend, createRequestModalHandlers] =
        useDisclosure(false)

    // Request編集モーダルを開閉するための状態を保持
    const [editRequestModalOpend, editRequestModalHandlers] =
        useDisclosure(false)

    return {
        logicalName,
        columns,
        requests,
        setEditedRequest,
        createRequestModalOpend,
        createRequestModalHandlers,
        editRequestModalOpend,
        editRequestModalHandlers,
    }
}
