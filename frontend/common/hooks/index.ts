import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

// 与えられたresourceをもとにAPIからデータを取得するhook
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

// 与えられたresourceをもとにデータを作成、更新、削除するhook
export function useMutateBase(resource: string): {
    createNewDataMutation: any
    updateSelectedDataMutation: any
    deleteSelectedDataMutation: any
} {
    const queryClient = useQueryClient()
    const invalidateAndRefetchData = () => {
        queryClient.invalidateQueries({ queryKey: [resource] })
    }

    const postData = (postData: any) => {
        return axios.post(`${API_URL}/${resource}`, postData)
    }
    const createNewDataMutation = useMutation({
        mutationFn: postData,
        onSuccess: invalidateAndRefetchData,
    })

    const patchData = (patchData: any) => {
        return axios.patch(`${API_URL}/${resource}/${patchData.id}`, patchData)
    }
    const updateSelectedDataMutation = useMutation({
        mutationFn: patchData,
        onSuccess: invalidateAndRefetchData,
    })

    const deleteData = (deleteData: any) => {
        return axios.delete(`${API_URL}/${resource}/${deleteData.id}`)
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
