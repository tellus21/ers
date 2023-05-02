import { requestInitialValue } from './../requestFeature'
import { usePatientFeature } from '@/pages/patients/patientFeature'
import axios from 'axios'
import { useContext, useState } from 'react'
import { EditedRequestContext } from '..'
import { useInsuranceFeature } from '../insurance/insuranceFeature'

// APIのURLとリソース名を定義
const API_URL = process.env.NEXT_PUBLIC_API_URL

function changeRequestId(values: any, request_id: number) {
    const newValues = { ...values }
    newValues.request_id = request_id
    return newValues
}

export const useCreateRequest = async (patientId: number | undefined) => {
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

    // const { initialValues } = useInsuranceFeature()

    // const postInsurance = changeRequestId(initialValues, newRequestData.id)

    // console.log(postInsurance)

    return { newRequestData }
}

const useRelationData = {}
