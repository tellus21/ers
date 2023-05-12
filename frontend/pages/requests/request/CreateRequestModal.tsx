import { filterById } from '@/common/lib'
import { DataTableBase } from '@/pages/components/DataTableBase'
import { insuranceInitialValues } from '../insurance/insuranceFeature'
import { conditionInitialValues } from '../condition/conditionFeature'
import {
    useCreateRequestModal,
    useCreateRequestValues,
    useInstructionRelationDataValues,
    useRequestRelationDataValues,
} from './useCreateRequest'
import { appointmentInitialValues } from '../appointment/appointmentFeature'
import { instructionInitialValues } from '../instruction/instractionFeature'
import { Button, Group, Modal, Text } from '@mantine/core'

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
    const {
        patients,
        columns,
        selectedPatient,
        setSelectedPatient,
        setEditedRequest,
        setEditedInstruction,
    } = useCreateRequestModal()

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

        //新しく依頼を作成したあとに、そのidに紐づけた、患者状況、保険情報、指示を作成する
        // 編集中の依頼を更新
        await setEditedRequest(newRequestData)

        // 患者状況を作成
        const { newCreatedData: newConditionValues } =
            await useRequestRelationDataValues(
                'conditions',
                conditionInitialValues,
                newRequestData.id
            )

        // 保険情報を作成
        const { newCreatedData: newInsuranceValues } =
            await useRequestRelationDataValues(
                'insurances',
                insuranceInitialValues,
                newRequestData.id
            )

        // 指示を作成
        const { newCreatedData: newInstructionValues } =
            await useRequestRelationDataValues(
                'instructions',
                instructionInitialValues,
                newRequestData.id
            )

        //指示を作成したあとに、そのidに紐づけた、予約を作成する
        //編集中の指示を更新
        await setEditedInstruction(newInstructionValues)

        // 予約を作成
        const { newCreatedData: newAppointmentValues } =
            await useInstructionRelationDataValues(
                'appointments',
                appointmentInitialValues,
                newInstructionValues.id,
                1 // 1は仮の値。ログインユーザーのidを取得する必要がある
            )

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
            size="80%"
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
