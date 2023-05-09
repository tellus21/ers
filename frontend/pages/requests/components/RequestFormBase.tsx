import { useContext } from 'react'
import { Button, Group } from '@mantine/core'
import { findIdByRequestId } from '@/common/lib'
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
    console.log('instruction', editedInstruction)
    const { updateSelectedDataMutation } = useRequestMutate(resource)

    const handleSubmit = (values: any) => {
        const ownId = findIdByRequestId(query, editedRequest.id)

        const newValues = {
            ...values,
            id: ownId,
            request_id: editedRequest.id,
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
