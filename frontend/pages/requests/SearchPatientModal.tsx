import { Button, Group, Modal, Text } from '@mantine/core'
import { DataTableBase } from '../components/DataTableBase'
import { usePatientFeature } from '../patients/patientFeature'
import { Dispatch, SetStateAction, useState } from 'react'
import { useMutateBase } from '@/common/hooks'
import { filterById } from '@/common/lib'
import axios from 'axios'
import { Request } from './requestFeature'

interface SearchPatientModalProps {
    opened: boolean
    close: () => void
    createRequestModalOpen: () => void
    form: any
    displayRequest: Request
    setDisplayRequest: Dispatch<SetStateAction<Request>>
    requests: any
}

export function SearchPatientModal({
    opened,
    close,
    createRequestModalOpen,
    form,
    displayRequest,
    setDisplayRequest,
    requests,
}: SearchPatientModalProps) {
    // ミューテーションを使用するためのhook
    const { createNewDataMutation: createRequest } = useMutateBase('requests')
    // 患者情報を取得するためのhook
    const { query: patients, columns } = usePatientFeature()

    // 選択された患者を保持するstate
    const [selectedPatient, setSelectedPatient] = useState({ id: undefined })

    // テーブルの行がクリックされたときの処理
    const onRowClick = (rowData: any) => {
        const patientId = rowData.id
        const newPatient: any = filterById(patients, patientId)
        setSelectedPatient(newPatient)
    }

    // 検査作成ボタンがクリックされたときの処理
    const onCreateButtonClick = () => {
        //依頼を新規登録
        axios
            .post('http://localhost:8000/api/requests', {
                user_id: 1, //ログイン中のユーザid
                patient_id: selectedPatient.id,
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: null,
            })
            .then((response) => {
                console.log(response.data)
                setDisplayRequest(response.data)
                console.log()
            })
            .catch((error) => {
                console.log(error)
            })

        //患者検索モーダルを閉じて検査依頼モーダルを開く
        close()
        createRequestModalOpen()
    }

    //onCloseの時にdisplayPatientを初期値に戻す関数を作成する

    return (
        <Modal opened={opened} onClose={close} title="患者検索" size="70%">
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
