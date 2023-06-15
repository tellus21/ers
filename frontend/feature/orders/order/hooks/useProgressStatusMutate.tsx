import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { editedOrderAtom } from '../../contexts/orderContexts'
import { useAtomValue } from 'jotai'
import { API_URL } from '@/common/constants'

const resource = 'orders'

export function useProgressStatusMutate() {
    const queryClient = useQueryClient()
    const editedOrder = useAtomValue(editedOrderAtom)

    const updateEditedOrderMutate = useMutation({
        mutationFn: (changed_progress_status) =>
            axios.patch(`${API_URL}/${resource}/${editedOrder.id}`, {
                ...editedOrder,
                progress_status: changed_progress_status,
            }),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [resource] })
        },
    })

    return { updateEditedOrderMutate }
}
