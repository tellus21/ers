import {
    Box,
    Button,
    Grid,
    Group,
    Modal,
    Paper,
    Space,
    Stack,
} from '@mantine/core'
import { OrderMetaData } from './OrderMetaData'
import { DisplayPatient } from '../patient/DisplayPatient'
import { ConditionForm } from '../condition/ConditionForm'
import { InsuranceForm } from '../insurance/InsuranceForm'
import { InstructionForm } from '../instruction/InstructionForm'
import { AppointmentForm } from '../appointment/AppointmentForm'

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
                <Group position="right">
                    <Button color="yellow" size="sm">
                        保留
                    </Button>{' '}
                    <Button color="gray" size="sm">
                        中止
                    </Button>
                    <Button color="violet" size="sm">
                        依頼者チェック済
                    </Button>
                </Group>
            </Box>
        </Modal>
    )
}
