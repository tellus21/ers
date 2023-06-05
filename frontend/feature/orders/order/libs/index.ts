import axios from 'axios'

// APIのURLとリソース名を定義
const API_URL = process.env.NEXT_PUBLIC_API_URL

function changeOrderId(values: any, order_id: number) {
    const newValues = { ...values }
    newValues.order_id = order_id
    return newValues
}

function changeInstructionId(values: any, instruction_id: number) {
    const newValues = { ...values }
    newValues.instruction_id = instruction_id
    return newValues
}

function changeUserId(values: any, user_id: number) {
    const newValues = { ...values }
    newValues.user_id = user_id
    return newValues
}

//共通部分を関数化して使い回せるようにしたいけど、うまくいかない
export const CreateOrderValues = async (patientId: number | undefined) => {
    //ログイン中ユーザを取得するcontext
    console.log(patientId)

    //---【orderの作成】---
    let resource = 'orders'

    // ★★テストデータ！！依頼作成時にpostするデータ
    const postOrder = {
        user_id: 1, //ログイン中のユーザid
        patient_id: patientId,
        progress_status: '依頼中',
        alert_level: '問題なし',
    }

    // POSTリクエストを送信し、レスポンスを受け取る
    const response = await axios.post(`${API_URL}/${resource}/`, postOrder)

    // 受け取ったレスポンスからIDを取得し、GETリクエストを送信する
    const newOrder = await axios.get(
        `${API_URL}/${resource}/${response.data.id}`
    )

    const newOrderData = await newOrder.data

    return { newOrderData }
}

export const CreateOrderRelationDataValues = async (
    resource: string,
    initialValues: any,
    orderId: number
) => {
    // postするデータ
    const postData = changeOrderId(initialValues, orderId)

    // POSTリクエストを送信し、レスポンスを受け取る
    const response = await axios.post(`${API_URL}/${resource}/`, postData)

    // 受け取ったレスポンスからIDを取得し、GETリクエストを送信する
    const createdData = await axios.get(
        `${API_URL}/${resource}/${response.data.id}`
    )

    // Data部分を取得
    const newCreatedData = await createdData.data

    return { newCreatedData }
}

export const CreateInstructionRelationDataValues = async (
    resource: string,
    initialValues: any,
    instructionId: number,
    userId: number
) => {
    const changeInstructionData = changeInstructionId(
        initialValues,
        instructionId
    )
    // postするデータ
    const postData = changeUserId(changeInstructionData, userId)

    // POSTリクエストを送信し、レスポンスを受け取る
    const response = await axios.post(`${API_URL}/${resource}/`, postData)

    // 受け取ったレスポンスからIDを取得し、GETリクエストを送信する
    const createdData = await axios.get(
        `${API_URL}/${resource}/${response.data.id}`
    )

    // Data部分を取得
    const newCreatedData = await createdData.data

    return { newCreatedData }
}
