import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// 与えられたfeatureをもとにAPIからデータを取得するhook
export function useQueryBase(feature: string): {
    isLoading: boolean
    error: any
    data: any
} {
    const getData = () =>
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/${feature}`).then((res) =>
            res.json()
        )
    const { isLoading, error, data } = useQuery({
        queryKey: [feature],
        queryFn: getData,
    })

    return { isLoading, error, data }
}

// 与えられたfeatureをもとにデータを作成、更新、削除するhook
export function useMutateBase(feature: string): {
    createNewDataMutation: any
    updateSelectedDataMutation: any
    deleteSelectedDataMutation: any
} {
    const queryClient = useQueryClient()
    const invalidateAndRefetchData = () => {
        queryClient.invalidateQueries({ queryKey: [feature] })
    }

    const postData = (postData: any) => {
        return axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/${feature}`,
            postData
        )
    }
    const createNewDataMutation = useMutation({
        mutationFn: postData,
        onSuccess: invalidateAndRefetchData,
    })

    const patchData = (patchData: any) => {
        return axios.patch(
            `${process.env.NEXT_PUBLIC_API_URL}/${feature}/${patchData.id}`,
            patchData
        )
    }
    const updateSelectedDataMutation = useMutation({
        mutationFn: patchData,
        onSuccess: invalidateAndRefetchData,
    })

    const deleteData = (deleteData) => {
        return axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/${feature}/${deleteData.id}`
        )
    }
    const deleteSelectedDataMutation = useMutation({
        mutationFn: deleteData,
        onSuccess: invalidateAndRefetchData,
    })

    return {
        createNewDataMutation,
        updateSelectedDataMutation,
        deleteSelectedDataMutation,
    }
}
