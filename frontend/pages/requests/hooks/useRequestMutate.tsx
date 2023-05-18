import { notifications } from '@mantine/notifications'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { editedRequestAtom } from '../contexts/requestContexts'
import { useAtomValue } from 'jotai'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export function useRequestMutate(resource: string) {
    const queryClient = useQueryClient()
    const editedRequest = useAtomValue(editedRequestAtom)

    const updateSelectedDataMutation = useMutation({
        mutationFn: (patchData: any) =>
            axios.put(`${API_URL}/${resource}/${patchData.id}`, patchData),
        onMutate: (variables) => ({ name: variables.name }),

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

            //予約情報の予約確定日が入力されていれば、進捗状況を、予定確定に変更する
            if (editedRequest.progress_status !== '保留中') {
                axios
                    .put(`${API_URL}/requests/${editedRequest.id}`, {
                        user_id: 1, //ログイン中のユーザid
                        patient_id: editedRequest.patient_id,
                        progress_status: '予約確定',
                        alert_level: '問題なし',
                    })

                    .then((response) => {
                        console.log('PUT request successful:', response)
                    })
                    .catch((error) => {
                        console.log('PUT request failed:', error)
                    })
            }

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
