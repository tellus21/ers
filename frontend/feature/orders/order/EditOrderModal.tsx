import {
    Box,
    Button,
    Grid,
    Group,
    Modal,
    Paper,
    Space,
    Stack,
    Text,
} from '@mantine/core'
import { OrderMetaData } from './OrderMetaData'
import { DisplayPatient } from '../patient/DisplayPatient'
import { ConditionForm } from '../condition/ConditionForm'
import { InsuranceForm } from '../insurance/InsuranceForm'
import { InstructionForm } from '../instruction/InstructionForm'
import { AppointmentForm } from '../appointment/AppointmentForm'
import { useProgressStatusMutate } from './hooks/useProgressStatusMutate'
import { ProgressStatus } from '@/common/constants'
import { useAtom } from 'jotai'
import { editedOrderAtom } from '@/common/contexts'

interface EditOrderModalProps {
    opened: boolean
    close: () => void
    conditionLogicalName: string
    conditionResource: any
    conditionForm: any
    conditionsQuery: any
    conditionFields: any
    insuranceLogicalName: string
    insuranceResource: any
    insuranceForm: any
    insurancesQuery: any
    insuranceFields: any
    instructionLogicalName: string
    instructionResource: any
    instructionForm: any
    instructionsQuery: any
    instructionFields: any
    appointmentLogicalName: string
    appointmentResource: any
    appointmentForm: any
    appointmentsQuery: any
    appointmentFields: any
}

export function EditOrderModal({
    opened,
    close,
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
}: EditOrderModalProps) {
    const { updateEditedOrderMutate } = useProgressStatusMutate()
    const [editedOrder, setEditedOrder] = useAtom(editedOrderAtom)

    const changeProgressStatus = (changed_progress_status: any) => {
        updateEditedOrderMutate.mutate(changed_progress_status)
        setEditedOrder({
            ...editedOrder,
            progress_status: changed_progress_status,
        })
    }

    const onClickHoldingButton = () => {
        changeProgressStatus(ProgressStatus.HOLDING)
    }

    const onClickCancelledButton = () => {
        changeProgressStatus(ProgressStatus.CANCELLED)
    }

    const onClickRequestingButton = () => {
        changeProgressStatus(ProgressStatus.REQUESTING)
    }

    const onClickReservationConfirmedButton = () => {
        changeProgressStatus(ProgressStatus.RESERVATION_CONFIRMED)
    }

    const onClickCheckedButton = () => {
        changeProgressStatus(ProgressStatus.CHECKED)
    }

    return (
        <Modal
            opened={opened}
            onClose={close}
            title={<OrderMetaData />}
            size="100%"
        >
            <Box bg="gray.2" p={20}>
                <Grid>
                    <Grid.Col span={4}>
                        <Stack>
                            <Paper>
                                <DisplayPatient />
                            </Paper>
                            <Paper>
                                <ConditionForm
                                    logicalName={conditionLogicalName}
                                    resource={conditionResource}
                                    form={conditionForm}
                                    query={conditionsQuery}
                                    fields={conditionFields}
                                />
                            </Paper>
                            <Paper>
                                <InsuranceForm
                                    logicalName={insuranceLogicalName}
                                    resource={insuranceResource}
                                    form={insuranceForm}
                                    query={insurancesQuery}
                                    fields={insuranceFields}
                                />
                            </Paper>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Stack>
                            <Paper>
                                <InstructionForm
                                    logicalName={instructionLogicalName}
                                    resource={instructionResource}
                                    form={instructionForm}
                                    query={instructionsQuery}
                                    fields={instructionFields}
                                />
                            </Paper>
                            <Paper>
                                <AppointmentForm
                                    logicalName={appointmentLogicalName}
                                    resource={appointmentResource}
                                    form={appointmentForm}
                                    query={appointmentsQuery}
                                    fields={appointmentFields}
                                />
                            </Paper>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Space h={10} />
                <Group position="apart">
                    <Group>
                        <Button
                            color="green"
                            size="sm"
                            onClick={onClickHoldingButton}
                        >
                            {ProgressStatus.HOLDING}
                        </Button>
                        <Button
                            color="gray"
                            size="sm"
                            onClick={onClickCancelledButton}
                        >
                            {ProgressStatus.CANCELLED}
                        </Button>
                    </Group>
                    <Group>
                        <Button
                            color="yellow"
                            size="sm"
                            onClick={onClickRequestingButton}
                        >
                            {ProgressStatus.REQUESTING}に戻す
                        </Button>
                        <Button
                            color="cyan"
                            size="sm"
                            onClick={onClickReservationConfirmedButton}
                        >
                            {ProgressStatus.RESERVATION_CONFIRMED}
                        </Button>
                        <Button
                            color="violet"
                            size="sm"
                            onClick={onClickCheckedButton}
                        >
                            {ProgressStatus.CHECKED}
                        </Button>
                    </Group>
                </Group>
                <Space h={10} />
                <Group position="right">
                    <Text size="sm" color="red.6">
                        ※「保留」「中止」「依頼中に戻す」「予約確定」「依頼者チェック済」ボタンは、クリック直後に反映されます。
                        （更新ボタンを押す必要はありません）
                    </Text>
                </Group>
            </Box>
        </Modal>
    )
}
