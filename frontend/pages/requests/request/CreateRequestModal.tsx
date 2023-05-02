import { Button, Group, Modal, Text } from '@mantine/core'

import { useContext, useState } from 'react'
import { filterById } from '@/common/lib'
import axios from 'axios'
import { usePatientFeature } from '@/pages/patients/patientFeature'
import { DataTableBase } from '@/pages/components/DataTableBase'
import { EditedRequestContext } from '..'

interface CreateRequestModalProps {
    opened: boolean
    close: () => void
    editRequestModalHandlersOpen: () => void
}

export function CreateRequestModal({
    opened,
    close,
    editRequestModalHandlersOpen,
}: CreateRequestModalProps) {
    // 患者情報を取得するためのhook
    const { query: patients, columns } = usePatientFeature()

    // 選択された患者を保持するstate
    const [selectedPatient, setSelectedPatient] = useState({ id: undefined })

    // 編集中の依頼を保持するcontext
    const { editedRequest, setEditedRequest } = useContext(EditedRequestContext)

    // テーブルの行がクリックされたときの処理
    const onRowClick = (rowData: any) => {
        const patientId = rowData.id
        const newPatient: any = filterById(patients, patientId)
        setSelectedPatient(newPatient)
    }

    // 依頼作成時に登録するデータ
    const postData = {
        user_id: 1, //ログイン中のユーザid
        patient_id: selectedPatient.id,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    // APIのURLとリソース名を定義
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const resource = 'requests'

    // 依頼作成ボタンがクリックされたときの処理
    const onCreateButtonClick = async () => {
        // POSTリクエストを送信し、レスポンスを受け取る
        const afterPostResponse = await axios.post(
            `${API_URL}/${resource}/`,
            postData
        )
        // 受け取ったレスポンスからIDを取得し、GETリクエストを送信する
        const afterGetResponse = await axios.get(
            `${API_URL}/${resource}/${afterPostResponse.data.id}`
        )
        // 受け取ったレスポンスを編集用のデータとしてセットする
        setEditedRequest(afterGetResponse.data)

        const insuranceData = {
            request_id: afterPostResponse.data.id,
            insurance_type: '',
            public_expense: '',
            responsible_city_district: '',
            life_insurance_responsible_name: '',
            other_medical_insurance: '',
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null,
        }
        // console.log(afterGetResponse.data.id)
        console.log(insuranceData)

        // 患者状況、保険情報、指示内容、予約情報をそれぞれrequestt_idをキーにして作成する
        // POSTリクエストを送信し、レスポンスを受け取る
        const afterPostInsurance = await axios.post(
            `${API_URL}/${'insurances'}/`,
            insuranceData
        )
        // // 受け取ったレスポンスからIDを取得し、GETリクエストを送信する
        // const afterGetInsurance = await axios.get(
        //     `${API_URL}/${'insurances'}/${afterPostInsurance.data.id}`
        // )

        // console.log(afterGetInsurance)

        //患者状況、保険情報、指示内容、予約情報をそれぞれrequestt_idをキーにして作成する
        // const { createCondition } = useRequestMutation('conditions')
        // createCondition(afterPostResponse.data.id)
        // createInsurances(afterPostResponse.data.id)
        // createInstructions(afterPostResponse.data.id)
        // createReservations(afterPostResponse.data.id)

        // 依頼作成モーダルを閉じる
        close()
        // 依頼編集モーダルを開く
        editRequestModalHandlersOpen()
    }

    // モーダルの閉じるボタンがクリックされたときの処理
    const onCloseClick = () => {
        close()
        setSelectedPatient({ id: undefined })
    }

    return (
        <Modal
            opened={opened}
            onClose={onCloseClick}
            title="患者検索"
            size="70%"
        >
            <Group position="apart">
                <Text size="sm">
                    検査対象の患者をテーブルから選択し、「検査依頼作成」ボタンを押してください。
                </Text>

                <Text size="sm">選択された患者：</Text>
                <Text size="sm">
                    {selectedPatient.last_name}　{selectedPatient.first_name}
                    さん
                </Text>

                {selectedPatient.id && (
                    <Button size="sm" onClick={onCreateButtonClick}>
                        検査依頼作成
                    </Button>
                )}
            </Group>

            <DataTableBase
                columns={columns}
                records={patients}
                onRowClick={(rowData) => onRowClick(rowData)}
            />
        </Modal>
    )
}
