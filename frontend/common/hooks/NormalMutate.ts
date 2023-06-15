import { notifications } from '@mantine/notifications'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { API_URL } from '../constants'

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

/** * 与えられたresourceをもとにデータを作成、更新、削除するhook
 * @param resource {string} APIから取得するリソース名
 * @returns {createNewDataMutation, updateSelectedDataMutation, deleteSelectedDataMutation} 作成、更新、削除のミューテーション関数
 */
// useMutateBase関数は、新しいデータを作成、更新、削除するためのMutationを返します。
export function useMutateBase(resource: string) {
    const queryClient = useQueryClient()

    // createNewDataMutation関数は、POSTリクエストを使用して新しいデータを作成します。
    const createNewDataMutation = useMutation({
        mutationFn: (postData: any) =>
            axios.post(`${API_URL}/${resource}`, postData),
        onMutate: (variables) => {
            const name = variables.name
            return { name }
        },
        // 登録失敗時のエラーハンドリング
        onError: (error, variables, context) => {
            notifications.show({
                title: '登録失敗😢',
                message: `${
                    context!.name
                }の登録に失敗しました。重複データがないか確認してください。`,
                color: 'red',
            })
        },
        // 登録成功時の処理
        onSuccess: (data, variables, context) => {
            // クエリキーに基づいてクエリを無効化し、再取得します。
            queryClient.invalidateQueries({ queryKey: [resource] })
            notifications.show({
                title: '登録成功😄  ',
                message: `${context!.name}を登録しました！`,
            })
        },
        // 登録処理完了時の処理
        onSettled: (data, error, variables, context) => {
            console.log('data:', data)
            console.log('error:', error)
            console.log('variables:', variables)
            console.log('context:', context)
        },
    })

    // updateSelectedDataMutation関数は、PATCHリクエストを使用して選択したデータを更新します。
    const updateSelectedDataMutation = useMutation({
        mutationFn: (patchData: any) =>
            axios.patch(`${API_URL}/${resource}/${patchData.id}`, patchData),
        onMutate: (variables) => {
            const name = variables.name
            return { name }
        },
        // 更新失敗時のエラーハンドリング
        onError: (error, variables, context) => {
            notifications.show({
                title: '更新失敗😢',
                message: `${
                    context!.name
                }の更新に失敗しました。重複データがないか確認してください。`,
                color: 'red',
            })
        },
        // 更新成功時の処理
        onSuccess: (data, variables, context) => {
            // クエリキーに基づいてクエリを無効化し、再取得します。
            queryClient.invalidateQueries({ queryKey: [resource] })
            notifications.show({
                title: '更新成功😄  ',
                message: `${context!.name}を更新しました！`,
            })
        },
        // 更新処理完了時の処理
        onSettled: (data, error, variables, context) => {
            console.log('data:', data)
            console.log('error:', error)
            console.log('variables:', variables)
            console.log('context:', context)
        },
    })

    // deleteSelectedDataMutation関数は、DELETEリクエストを使用して選択したデータを削除します。
    const deleteSelectedDataMutation = useMutation({
        mutationFn: (deleteData: any) =>
            axios.delete(`${API_URL}/${resource}/${deleteData.id}`),
        onMutate: (variables) => {
            const name = variables.name
            return { name }
        },
        // 削除失敗時のエラーハンドリング
        onError: (error, variables, context) => {
            notifications.show({
                title: '削除失敗😢',
                message: `${
                    context!.name
                }の削除に失敗しました。重複データがないか確認してください。`,
                color: 'red',
            })
        },
        // 削除成功時の処理
        onSuccess: (data, variables, context) => {
            // クエリキーに基づいてクエリを無効化し、再取得します。
            queryClient.invalidateQueries({ queryKey: [resource] })
            notifications.show({
                title: '削除成功😄  ',
                message: `${context!.name}を削除しました！`,
            })
        },
        // 削除処理完了時の処理
        onSettled: (data, error, variables, context) => {
            console.log('data:', data)
            console.log('error:', error)
            console.log('variables:', variables)
            console.log('context:', context)
        },
    })

    return {
        createNewDataMutation,
        updateSelectedDataMutation,
        deleteSelectedDataMutation,
    }
}
