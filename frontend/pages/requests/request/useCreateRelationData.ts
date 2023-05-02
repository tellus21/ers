import axios from 'axios'
import { AmdDependency } from 'typescript'

// APIのURLとリソース名を定義
const API_URL = process.env.NEXT_PUBLIC_API_URL

function changeRequestId(values: any, request_id: number) {
    const newValues = { ...values }
    newValues.request_id = request_id
    return newValues
}

export const useCreateRelationData = async (
    resource: string,
    initialValues: any,
    request_id: number
) => {
    // postするデータ
    const postData = changeRequestId(initialValues, request_id)

    console.log(postData)

    // POSTリクエストを送信し、レスポンスを受け取る
    const response = await axios.post(`${API_URL}/${resource}/`, postData)

    console.log(response)

    // 受け取ったレスポンスからIDを取得し、GETリクエストを送信する
    const createdData = await axios.get(
        `${API_URL}/${resource}/${response.data.id}`
    )

    // Data部分を取得
    const newCreatedData = await createdData.data

    return { newCreatedData }
}
