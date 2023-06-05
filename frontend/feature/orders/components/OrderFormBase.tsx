import { Button, Group } from '@mantine/core'
import { findIdByInstructionId, findIdByOrderId } from '@/common/lib'
import { useOrderMutate } from '../hooks/useOrderMutate'
import { useAtomValue } from 'jotai'
import {
    editedInstructionAtom,
    editedOrderAtom,
} from '../contexts/orderContexts'

const captionUpdate = '更新'

interface OrderFormBaseProps {
    resource: string
    form: any
    query: any
    children: React.ReactNode
}

// フォームの基本的なプロパティを受け取り、フォームを提出する関数を定義します
export function OrderFormBase({
    resource,
    form,
    query,
    children,
}: OrderFormBaseProps) {
    // フォームの基本的なプロパティを受け取ります
    const editedOrder = useAtomValue(editedOrderAtom)
    const editedInstruction = useAtomValue(editedInstructionAtom)
    const { updateSelectedDataMutation } = useOrderMutate(resource)

    // フォームを提出する関数を定義します
    const handleSubmit = (values: any) => {
        let ownId
        let newValues
        if (resource === 'appointments') {
            // インストラクションIDから自分のIDを取得します
            ownId = findIdByInstructionId(query, editedInstruction.id)
            newValues = {
                ...values,
                id: ownId,
                user_id: 1, //仮
                instruction_id: editedInstruction.id,
            }
        } else {
            // リクエストIDから自分のIDを取得します
            ownId = findIdByOrderId(query, editedOrder.id)
            newValues = {
                ...values,
                id: ownId,
                order_id: editedOrder.id,
            }
        }
        // 選択したデータを更新します
        updateSelectedDataMutation.mutate(newValues)
    }

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            {children}

            <Group position="center" mt="sm">
                <Button size="sm" type="submit">
                    {captionUpdate}
                </Button>
            </Group>
        </form>
    )
}
