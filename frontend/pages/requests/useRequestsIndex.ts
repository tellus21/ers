import { useState } from 'react'
import {
    Request,
    requestInitialValue,
    useRequestFeature,
} from './requestFeature'
import {
    Instruction,
    instructionInitialValues,
} from './instruction/instractionFeature'
import { useDisclosure } from '@mantine/hooks'

// Requestのindexを使用するためのカスタムフック
export const useRequestsIndex = () => {
    // Requestから論理名、列、クエリを取得
    const { logicalName, columns, query } = useRequestFeature()

    // 編集中のRequestを状態として保持
    const [editedRequest, setEditedRequest] =
        useState<Request>(requestInitialValue)

    // 編集中の指示を状態として保持
    const [editedInstruction, setEditedInstruction] = useState<Instruction>(
        instructionInitialValues
    )
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
        editedRequest,
        setEditedRequest,
        editedInstruction,
        setEditedInstruction,
        createRequestModalOpend,
        createRequestModalHandlers,
        editRequestModalOpend,
        editRequestModalHandlers,
    }
}
