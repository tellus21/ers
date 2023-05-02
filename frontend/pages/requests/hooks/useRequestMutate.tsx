import { notifications } from '@mantine/notifications'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export function useRequestMutate(resource: string) {
    const queryClient = useQueryClient()

    const updateSelectedDataMutation = useMutation({
        mutationFn: (patchData: any) =>
            axios.put(`${API_URL}/${resource}/${patchData.id}`, patchData),
        onMutate: (variables) => {
            const name = variables.name
            return { name }
        },

        onError: (error, variables, context) => {
            notifications.show({
                title: '更新失敗😢',
                message: `${
                    context!.name
                }の更新に失敗しました。重複データがないか確認してください。`,
                color: 'red',
            })
        },

        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({ queryKey: [resource] })
            notifications.show({
                title: '更新成功😄  ',
                message: `${context!.name}を更新しました！`,
            })
        },

        onSettled: (data, error, variables, context) => {
            console.log('data:', data)
            console.log('error:', error)
            console.log('variables:', variables)
            console.log('context:', context)
        },
    })

    return {
        updateSelectedDataMutation,
    }
}
