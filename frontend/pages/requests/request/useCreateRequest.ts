import { usePatientFeature } from '@/pages/patients/patientFeature'
import axios from 'axios'
import { useState } from 'react'
import { useSetAtom } from 'jotai'
import { editedInstructionAtom, editedRequestAtom } from '../../requestContext'

// APIのURLとリソース名を定義
const API_URL = process.env.NEXT_PUBLIC_API_URL

function changeRequestId(values: any, request_id: number) {
    const newValues = { ...values }
    newValues.request_id = request_id
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
export const useCreateRequestValues = async (patientId: number | undefined) => {
    //ログイン中ユーザを取得するcontext
    console.log(patientId)

    //---【requestの作成】---
    let resource = 'requests'

    // 依頼作成時にpostするデータ
    const postRequest = {
        user_id: 1, //ログイン中のユーザid
        patient_id: patientId,
    }

    // POSTリクエストを送信し、レスポンスを受け取る
    const response = await axios.post(`${API_URL}/${resource}/`, postRequest)

    // 受け取ったレスポンスからIDを取得し、GETリクエストを送信する
    const newRequest = await axios.get(
        `${API_URL}/${resource}/${response.data.id}`
    )

    const newRequestData = await newRequest.data

    return { newRequestData }
}

export const useRequestRelationDataValues = async (
    resource: string,
    initialValues: any,
    requestId: number
) => {
    // postするデータ
    const postData = changeRequestId(initialValues, requestId)

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

export const useInstructionRelationDataValues = async (
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

export const useCreateRequestModal = () => {
    // 患者情報を取得するためのhook
    const { query: patients, columns } = usePatientFeature()

    // 選択された患者を保持するstate
    const [selectedPatient, setSelectedPatient] = useState({ id: undefined })

    // 編集中のRequestを変更する関数を取得
    const setEditedRequest = useSetAtom(editedRequestAtom)

    // 編集中のInstructionを変更する関数を取得
    const setEditedInstruction = useSetAtom(editedInstructionAtom)

    return {
        patients,
        columns,
        selectedPatient,
        setSelectedPatient,
        setEditedRequest,
        setEditedInstruction,
    }
}
