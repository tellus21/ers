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

// ReactのContext APIを使用して、編集中の依頼と指示を保持するためのコンテキストを作成
export const EditedRequestContext = createContext({})
export const EditedInstructContext = createContext({})

export default function Index() {
    // 依頼一覧に関する情報を取得
    const {
        logicalName,
        columns,
        requests,
        editedRequest,
        setEditedRequest,
        patients,
        displayPatient,
        setDisplayPatient,
        conditions,
        conditionForm,
        editedCondition,
        setEditedCondition,
        insurances,
        insuranceForm,
        editedInsurance,
        setEditedInsurance,
        instructions,
        instructionForm,
        editedInstruction,
        setEditedInstruction,
        appointments,
        appointmentForm,
        editedAppointment,
        setEditedAppointment,
        createRequestModalOpend,
        createRequestModalHandlers,
        editRequestModalOpend,
        editRequestModalHandlers,
    } = useRequestsIndex()

    // テーブルの行がクリックされた時の処理
    const onTableRowClick = (rowData: any) => {
        // クリックされた行のデータをInsuranceInsurance依頼としてセットする
        const selectedRequest = requests.find(
            (request: Request) => request.id === rowData.id
        )
        setEditedRequest(selectedRequest)
        const conditionValues = conditions.find(
            (condition: Condition) => condition.id === selectedRequest.id
        )
        const insuranceValues = insurances.find(
            (insurance: Insurance) => insurance.id === selectedRequest.id
        )
        insuranceForm.setValues(insuranceValues)
        // insuranceForm.setValues((prev) => ({ ...prev, ...insuranceValues }))
        console.log('insuranceValues', insuranceValues)
        console.log('insuranceForm', insuranceForm.values)

        const instructionValues = instructions.find(
            (instruction: Instruction) => instruction.id === selectedRequest.id
        )
        const appointmentValues = appointments.find(
            (appointment: Appointment) => appointment.id === selectedRequest.id
        )
        //各フォームにsetValuesする

        // setEditedCondition(conditionValues)
        // setEditedInsurance(insuranceValues)
        // setEditedInstruction(instructionValues)
        // setEditedAppointment(appointmentValues)

        // const selectedData = query.find((item: any) => item.id === rowData.id)
        // //birthdayをDate型に変換してからフォームに設定する
        // form.setValues(convertDateProperty(selectedData, 'birthday'))

        //requestのidを取得して、conditionをsetValuesする
        //その際に、一旦取得時のデータを取得して、比較して、差異があれば、だれかデータ更新したっていう通知だす。
        // const selctedCondition = (condition: Condition) => condition.id
        // console.log('cond', selctedCondition)
        editRequestModalHandlers.open()
    }

    return (
        <Container size="xl">
            <Text size="md">{`${logicalName}一覧`}</Text>

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
                columns={columns}
                records={requests}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            />

            {/* 依頼編集モーダルを表示 */}
            <EditRequestModal
                opened={editRequestModalOpend}
                close={editRequestModalHandlers.close}
            />
        </Container>
    )
}
