import { Button, Group, Modal, Text } from '@mantine/core'

import { useContext, useState } from 'react'
import { filterById } from '@/common/lib'
import { usePatientFeature } from '@/pages/patients/patientFeature'
import { DataTableBase } from '@/pages/components/DataTableBase'
import { EditedRequestContext } from '..'
import { insuranceInitialValues } from '../insurance/insuranceFeature'
import { conditionInitialValues } from '../condition/conditionFeature'
import {
    useCreateRequestValues,
    useInstructionRelationDataValues,
    useRequestRelationDataValues,
} from './useCreateRequest'
import { appointmentInitialValues } from '../appointment/appointmentFeature'
import { instructionInitialValues } from '../instruction/instractionFeature'

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
        const newPatient: any = filterById(patients, rowData.id)
        setSelectedPatient(newPatient)
    }

    // 依頼作成ボタンがクリックされたときの処理
    const onCreateButtonClick = async () => {
        const { newRequestData } = await useCreateRequestValues(
            selectedPatient.id
        )
        await setEditedRequest(newRequestData)

        const { newCreatedData: newConditionValues } =
            await useRequestRelationDataValues(
                'conditions',
                conditionInitialValues,
                newRequestData.id
            )

        const { newCreatedData: newInsuranceValues } =
            await useRequestRelationDataValues(
                'insurances',
                insuranceInitialValues,
                newRequestData.id
            )

        const { newCreatedData: newInstructionValues } =
            await useRequestRelationDataValues(
                'instructions',
                instructionInitialValues,
                newRequestData.id
            )

        const { newCreatedData: newAppointmentValues } =
            await useInstructionRelationDataValues(
                'appointments',
                appointmentInitialValues,
                newInstructionValues.id,
                1 // 1は仮の値。ログインユーザーのidを取得する必要がある
            )

        console.log(newAppointmentValues)
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
