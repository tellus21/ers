import { notifications } from '@mantine/notifications'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

/**
 * 与えられたresourceをもとにAPIからデータを取得するhook
 * @param resource {string} APIから取得するリソース名
 * @returns {isLoading, error, data} 取得中かどうか、エラー情報、取得したデータ
 */
export function useQueryBase(resource: string): {
    isLoading: boolean
    error: any
    data: any
} {
    const getData = () =>
        fetch(`${API_URL}/${resource}`).then((res) => res.json())
    const { isLoading, error, data } = useQuery({
        queryKey: [resource],
        queryFn: getData,
    })

    return { isLoading, error, data }
}

/**
 * 与えられたresourceをもとにデータを作成、更新、削除するhook
 * @param resource {string} APIから取得するリソース名
 * @returns {createNewDataMutation, updateSelectedDataMutation, deleteSelectedDataMutation} 作成、更新、削除のミューテーション関数
 */
export function useMutateBase(resource: string): {
    createNewDataMutation: any
    updateSelectedDataMutation: any
    deleteSelectedDataMutation: any
} {
    const queryClient = useQueryClient()
    const invalidateAndRefetchData = () => {
        queryClient.invalidateQueries({ queryKey: [resource] })
    }

    const createNewDataMutation = useMutation({
        mutationFn: (postData: any) =>
            axios.post(`${API_URL}/${resource}`, postData),
        onMutate: (variables) => {
            const name = variables.name
            return { name }
        },
        onError: (error, variables, context) => {
            notifications.show({
                title: '登録失敗😢',
                message: `${
                    context!.name
                }の登録に失敗しました。重複データがないか確認してください。`,
                color: 'red',
            })
        },
        onSuccess: (data, variables, context) => {
            invalidateAndRefetchData
            notifications.show({
                title: '登録成功😄  ',
                message: `${context!.name}を登録しました！`,
            })
        },
        onSettled: (data, error, variables, context) => {
            console.log('data:', data)
            console.log('error:', error)
            console.log('variables:', variables)
            console.log('context:', context)
        },
    })

    const updateSelectedDataMutation = useMutation({
        mutationFn: (patchData: any) =>
            axios.patch(`${API_URL}/${resource}/${patchData.id}`, patchData),
        onSuccess: invalidateAndRefetchData,
    })

    const deleteSelectedDataMutation = useMutation({
        mutationFn: (deleteData: any) =>
            axios.delete(`${API_URL}/${resource}/${deleteData.id}`),
        onSuccess: invalidateAndRefetchData,
    })

    return {
        createNewDataMutation,
        updateSelectedDataMutation,
        deleteSelectedDataMutation,
    }
}
