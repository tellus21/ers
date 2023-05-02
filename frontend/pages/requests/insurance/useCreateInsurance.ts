import axios from 'axios'
import { initialValues } from './insuranceFeature'

// APIのURLとリソース名を定義
const API_URL = process.env.NEXT_PUBLIC_API_URL

function changeRequestId(values: any, request_id: number) {
    const newValues = { ...values }
    newValues.request_id = request_id
    return newValues
}

export const useCreateInsurance = async (request_id: number) => {
    //---【Insuranceの作成】---
    let resource = 'insurances'

    // postするデータ
    const postInsurance = changeRequestId(initialValues, request_id)

    // POSTリクエストを送信し、レスポンスを受け取る
    const response = await axios.post(`${API_URL}/${resource}/`, postInsurance)

    // 受け取ったレスポンスからIDを取得し、GETリクエストを送信する
    const newInsurance = await axios.get(
        `${API_URL}/${resource}/${response.data.id}`
    )

    const newInsuranceData = await newInsurance.data

    return { newInsuranceData }
}
