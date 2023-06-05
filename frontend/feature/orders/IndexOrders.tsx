import { Button, Container, Group, Text } from '@mantine/core'
import { DataTableBase } from '../components/DataTableBase'
import { EditOrderModal } from './order/EditOrderModal'
import { CreateOrderModal } from './order/CreateOrderModal'
import { useOrdersIndex } from './useOrdersIndex'
import { Order } from './orderFeature'
import { Condition } from './condition/conditionFeature'
import { Insurance } from './insurance/insuranceFeature'
import { Instruction } from './instruction/instractionFeature'
import { Appointment } from './appointment/appointmentFeature'
import { convertDateProperty } from '@/common/lib'

export function IndexOrders() {
    // 依頼一覧に関する情報を取得
    const {
        orderLogicalName,
        orderColumns,
        ordersQuery,
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
        createOrderModalOpend,
        createOrderModalHandlers,
        editOrderModalOpend,
        editOrderModalHandlers,
        setEditedOrder,
        setEditedInstruction,
    } = useOrdersIndex()

    // テーブルの行がクリックされた時の処理
    const onTableRowClick = (rowData: any) => {
        // クリックされた行のデータを依頼としてセットする
        const selectedOrder = ordersQuery?.find(
            (order: Order) => order.id === rowData.id
        )

        // 編集中のorderを更新
        setEditedOrder(selectedOrder)

        // クリックされた行のデータを患者状況としてセットする
        const conditionValues = conditionsQuery?.find(
            (condition: Condition) => condition.id === selectedOrder.id
        )
        conditionForm.setValues(conditionValues)

        // クリックされた行のデータを保険情報としてセットする
        const insuranceValues = insurancesQuery?.find(
            (insurance: Insurance) => insurance.id === selectedOrder.id
        )
        insuranceForm.setValues(insuranceValues)

        // クリックされた行のデータを指示としてセットする
        let instructionValues = instructionsQuery?.find(
            (instruction: Instruction) => instruction.id === selectedOrder.id
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
            (appointment: Appointment) => appointment.id === selectedOrder.id
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

        //orderのidを取得して、conditionをsetValuesする
        //その際に、一旦取得時のデータを取得して、比較して、差異があれば、だれかデータ更新したっていう通知だす。
        editOrderModalHandlers.open()
    }

    return (
        <Container size="xl">
            <Text size="md">{`${orderLogicalName}一覧`}</Text>

            {/* 依頼登録ボタンを表示 */}
            <Group position="right">
                <Button size="sm" onClick={createOrderModalHandlers.open}>
                    {'患者検索'}
                </Button>
            </Group>

            {/* 依頼作成(患者検索モーダル)を表示 */}
            <CreateOrderModal
                opened={createOrderModalOpend}
                close={createOrderModalHandlers.close}
                editOrderModalHandlersOpen={editOrderModalHandlers.open}
            />

            {/* 依頼一覧テーブルを表示 */}
            <DataTableBase
                columns={orderColumns}
                records={ordersQuery}
                onRowClick={(rowData) => onTableRowClick(rowData)}
            />

            {/* 依頼編集モーダルを表示 */}
            <EditOrderModal
                opened={editOrderModalOpend}
                close={editOrderModalHandlers.close}
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
