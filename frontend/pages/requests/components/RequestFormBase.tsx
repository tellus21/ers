import { useContext } from 'react'
import { Button, Group } from '@mantine/core'
import { findIdByInstructionId, findIdByRequestId } from '@/common/lib'
import { useRequestMutate } from '../hooks/useRequestMutate'
import { EditedInstructContext, EditedRequestContext } from '..'

const captionUpdate = '更新'

interface RequestFormBaseProps {
    resource: string
    form: any
    query: any
    children: React.ReactNode
}

export function RequestFormBase({
    resource,
    form,
    query,
    children,
}: RequestFormBaseProps) {
    const { editedRequest } = useContext(EditedRequestContext)
    const { editedInstruction } = useContext(EditedInstructContext)
    const { updateSelectedDataMutation } = useRequestMutate(resource)

    const handleSubmit = (values: any) => {
        let ownId
        let newValues
        if (resource === 'appointments') {
            ownId = findIdByInstructionId(query, editedInstruction.id)
            newValues = {
                ...values,
                id: ownId,
                user_id: 1, //仮
                instruction_id: editedInstruction.id,
            }
        } else {
            ownId = findIdByRequestId(query, editedRequest.id)
            newValues = {
                ...values,
                id: ownId,
                request_id: editedRequest.id,
            }
        }
        console.log(newValues)
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
