import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// thenのあとに型をつけたい
export function useQueryBase(feature: string) {
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

export function useMutateBase(feature: string) {
    const queryClient = useQueryClient()
    const invalidateAndRefetchData = () => {
        queryClient.invalidateQueries({ queryKey: [feature] })
    }

    const postData = (postData) => {
        return axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/${feature}`,
            postData
        )
    }
    const createNewDataMutation = useMutation({
        mutationFn: postData,
        onSuccess: invalidateAndRefetchData,
    })

    const patchData = (patchData) => {
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
