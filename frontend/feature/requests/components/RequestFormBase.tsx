import { Button, Group } from '@mantine/core'
import { findIdByInstructionId, findIdByRequestId } from '@/common/lib'
import { useRequestMutate } from '../hooks/useRequestMutate'
import { useAtomValue } from 'jotai'
import {
    editedInstructionAtom,
    editedRequestAtom,
} from '../contexts/requestContexts'

const captionUpdate = '更新'

interface RequestFormBaseProps {
    resource: string
    form: any
    query: any
    children: React.ReactNode
}

// フォームの基本的なプロパティを受け取り、フォームを提出する関数を定義します
export function RequestFormBase({
    resource,
    form,
    query,
    children,
}: RequestFormBaseProps) {
    // フォームの基本的なプロパティを受け取ります
    const editedRequest = useAtomValue(editedRequestAtom)
    const editedInstruction = useAtomValue(editedInstructionAtom)
    const { updateSelectedDataMutation } = useRequestMutate(resource)

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
            ownId = findIdByRequestId(query, editedRequest.id)
            newValues = {
                ...values,
                id: ownId,
                request_id: editedRequest.id,
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
