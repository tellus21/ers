import {
    Button,
    Container,
    Group,
    Space,
    Text,
    useMantineColorScheme,
    useMantineTheme,
} from '@mantine/core'
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
import { useEffect, useState } from 'react'
import { ProgressStatus } from '@/common/constants'

export function IndexOrders() {
    const theme = useMantineTheme()
    const rowStyle = ({ progress_status }: { progress_status: string }) => {
        switch (progress_status) {
            case ProgressStatus.REQUESTING:
                return { backgroundColor: theme.colors.yellow[0] }
            case ProgressStatus.RESERVING:
                return { backgroundColor: theme.colors.blue[0] }
            case ProgressStatus.RESERVATION_CONFIRMED:
                return { backgroundColor: theme.colors.cyan[0] }
            case ProgressStatus.CHECKED:
                return { backgroundColor: theme.colors.violet[0] }
            case ProgressStatus.HOLDING:
                return { backgroundColor: theme.colors.green[0] }
            case ProgressStatus.CANCELLED:
                return { backgroundColor: theme.colors.gray[3] }
            default:
                return undefined
        }
    }

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

    const [filteredOrders, setFilteredOrders] = useState(ordersQuery)

    // ordersQueryが変更されたら、フィルターされたを再設定する
    useEffect(() => {
        setFilteredOrders(ordersQuery)
    }, [ordersQuery])

    // ステータスをクリックしたときに、フィルターされた依頼を更新する
    const onClickStatus = (orders: Order[], status: string) => {
        const updatedOrders = orders?.filter(
            (order) => order.progress_status === status
        )
        setFilteredOrders(updatedOrders)
    }

    // フィルターを解除する関数
    const resetFilter = (orders: Order[]) => {
        setFilteredOrders(orders)
    }

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
            (appointment: Appointment) =>
                appointment.id === instructionValues.id
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

            {/* 依頼作成(患者検索モーダル)を表示 */}
            <CreateOrderModal
                opened={createOrderModalOpend}
                close={createOrderModalHandlers.close}
                editOrderModalHandlersOpen={editOrderModalHandlers.open}
            />
            <Group position="apart">
                {/* 依頼状況ボタンを表示 */}
                <Group>
                    {/* 全てボタン */}
                    <Button
                        color="blue"
                        onClick={() => resetFilter(ordersQuery)}
                    >
                        全て
                    </Button>

                    {/* 依頼中ボタン */}
                    <Button
                        color="yellow"
                        onClick={() =>
                            onClickStatus(
                                ordersQuery,
                                ProgressStatus.REQUESTING
                            )
                        }
                    >
                        {ProgressStatus.REQUESTING}
                    </Button>

                    {/* 予約中ボタン */}
                    {/* <Button
                        color=""
                        onClick={() =>
                            onClickStatus(ordersQuery, ProgressStatus.RESERVING)
                        }
                    >
                        {ProgressStatus.RESERVING}
                    </Button> */}

                    {/* 予約確定ボタン */}
                    <Button
                        color="cyan"
                        onClick={() =>
                            onClickStatus(
                                ordersQuery,
                                ProgressStatus.RESERVATION_CONFIRMED
                            )
                        }
                    >
                        {ProgressStatus.RESERVATION_CONFIRMED}
                    </Button>

                    {/* 依頼者チェックボタン */}
                    <Button
                        color="violet"
                        onClick={() =>
                            onClickStatus(ordersQuery, ProgressStatus.CHECKED)
                        }
                    >
                        {ProgressStatus.CHECKED}
                    </Button>

                    {/* 保留ボタン */}
                    <Button
                        color="green"
                        onClick={() =>
                            onClickStatus(ordersQuery, ProgressStatus.HOLDING)
                        }
                    >
                        {ProgressStatus.HOLDING}
                    </Button>

                    {/* 中止ボタン */}
                    <Button
                        color="gray"
                        onClick={() =>
                            onClickStatus(ordersQuery, ProgressStatus.CANCELLED)
                        }
                    >
                        {ProgressStatus.CANCELLED}
                    </Button>
                </Group>

                {/* 患者検索ボタンを表示 */}
                <Group>
                    <Button size="sm" onClick={createOrderModalHandlers.open}>
                        患者検索(依頼登録)
                    </Button>
                </Group>
            </Group>

            <Space h="xs" />

            {/* 依頼一覧テーブルを表示 */}
            <DataTableBase
                columns={orderColumns}
                records={filteredOrders}
                onRowClick={(rowData) => onTableRowClick(rowData)}
                rowStyle={rowStyle}
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
