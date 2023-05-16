import { createContext } from 'react'
import { Button, Container, Group, Text } from '@mantine/core'
import { DataTableBase } from '../components/DataTableBase'
import { EditRequestModal } from './request/EditRequestModal'
import { CreateRequestModal } from './request/CreateRequestModal'
import { useRequestsIndex } from './useRequestsIndex'
import { Request } from './requestFeature'
import { Condition } from './condition/conditionFeature'
import { Insurance } from './insurance/insuranceFeature'
import { Instruction } from './instruction/instractionFeature'
import { Appointment } from './appointment/appointmentFeature'
import { convertDateProperty } from '@/common/lib'

// ReactのContext APIを使用して、編集中の依頼と指示を保持するためのコンテキストを作成
export const EditedRequestContext = createContext({})
export const EditedInstructContext = createContext({})
export default function Index() {
    // 依頼一覧に関する情報を取得
    const {
        requestLogicalName,
        requestColumns,
        requestsQuery,
        patientLogicalName,
        patientResource,
        patientForm,
        patientsQuery,
        patientFields,
        conditionLogicalName,
        conditionResource,
        conditionForm,
        conditionsQuery,
        conditionFields,
        insuranceLogicalName,
        insuranceResource,
        insuranceForm,
        insurancesQuery,
        insuranceFields,
        instructionLogicalName,
        instructionResource,
        instructionForm,
        instructionsQuery,
        instructionFields,
        appointmentLogicalName,
        appointmentResource,
        appointmentForm,
        appointmentsQuery,
        appointmentFields,
        createRequestModalOpend,
        createRequestModalHandlers,
        editRequestModalOpend,
        editRequestModalHandlers,
        setEditedRequest,
        setEditedInstruction,
    } = useRequestsIndex()

    // テーブルの行がクリックされた時の処理
    const onTableRowClick = (rowData: any) => {
        // クリックされた行のデータを依頼としてセットする
        const selectedRequest = requestsQuery?.find(
            (request: Request) => request.id === rowData.id
        )

        // 編集中のrequestを更新
        setEditedRequest(selectedRequest)

        // クリックされた行のデータを患者状況としてセットする
        const conditionValues = conditionsQuery?.find(
            (condition: Condition) => condition.id === selectedRequest.id
        )
        conditionForm.setValues(conditionValues)

        // クリックされた行のデータを保険情報としてセットする
        const insuranceValues = insurancesQuery?.find(
            (insurance: Insurance) => insurance.id === selectedRequest.id
        )
        insuranceForm.setValues(insuranceValues)

        // クリックされた行のデータを指示としてセットする
        let instructionValues = instructionsQuery?.find(
            (instruction: Instruction) => instruction.id === selectedRequest.id
        )
        // instructionValuesの日付型のプロパティを変換
        if (instructionValues?.candidate_month_1 !== null) {
            instructionValues = convertDateProperty(
                instructionValues,
                'candidate_month_1'
            )
        }
        if (instructionValues?.candidate_month_2 !== null) {
            instructionValues = convertDateProperty(
                instructionValues,
                'candidate_month_2'
            )
        }
        instructionForm.setValues(instructionValues)

        // 編集中のinstructionを更新
        setEditedInstruction(instructionValues)

        // クリックされた行のデータを予約情報としてセットする
        let appointmentValues = appointmentsQuery?.find(
            (appointment: Appointment) => appointment.id === selectedRequest.id
        )
        // appointmentValuesの日付型のプロパティを変換
        if (appointmentValues?.scheduled_confirmation_date !== null) {
            appointmentValues = convertDateProperty(
                appointmentValues,
                'scheduled_confirmation_date'
            )
        }
        if (appointmentValues?.transmission_date !== null) {
            appointmentValues = convertDateProperty(
                appointmentValues,
                'transmission_date'
            )
        }
        appointmentForm.setValues(appointmentValues)

        //requestのidを取得して、conditionをsetValuesする
        //その際に、一旦取得時のデータを取得して、比較して、差異があれば、だれかデータ更新したっていう通知だす。
        editRequestModalHandlers.open()
    }

    return (
        <Container size="xl">
            <Text size="md">{`${requestLogicalName}一覧`}</Text>

            {/* 依頼登録ボタンを表示 */}
            <Group position="right">
                <Button size="sm" onClick={createRequestModalHandlers.open}>
                    {'患者検索'}
                </Button>
            </Group>

            {/* 依頼作成(患者検索モーダル)を表示 */}
            <CreateRequestModal
                opened={createRequestModalOpend}
                close={createRequestModalHandlers.close}
                editRequestModalHandlersOpen={editRequestModalHandlers.open}
            />

            {/* 依頼一覧テーブルを表示 */}
            <DataTableBase
                columns={requestColumns}
                records={requestsQuery}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            />

            {/* 依頼編集モーダルを表示 */}
            <EditRequestModal
                opened={editRequestModalOpend}
                close={editRequestModalHandlers.close}
                conditionLogicalName={conditionLogicalName}
                conditionResource={conditionResource}
                conditionForm={conditionForm}
                conditionsQuery={conditionsQuery}
                conditionFields={conditionFields}
                insuranceLogicalName={insuranceLogicalName}
                insuranceResource={insuranceResource}
                insuranceForm={insuranceForm}
                insurancesQuery={insurancesQuery}
                insuranceFields={insuranceFields}
                instructionLogicalName={instructionLogicalName}
                instructionResource={instructionResource}
                instructionForm={instructionForm}
                instructionsQuery={instructionsQuery}
                instructionFields={instructionFields}
                appointmentLogicalName={appointmentLogicalName}
                appointmentResource={appointmentResource}
                appointmentForm={appointmentForm}
                appointmentsQuery={appointmentsQuery}
                appointmentFields={appointmentFields}
            />
        </Container>
    )
}
