import { Box } from '@mantine/core'
import { ModalAndDataTable } from '@/common/components/ModalAndDataTable'
import { GridItemsLayout } from '@/common/components/layout/GridItemsLayout'
import { useRequest } from './useRequest'
import { PatientInformation } from '../_exams/patient-information/PatientInformation'
import { ConditionForm } from './condition/ConditionForm'
import { InsuranceForm } from './insurance/InsuranceForm'
import { AppointmentForm } from './appointment/AppointmentForm'
import { InstractionForm } from './instruction/InstractionForm'

export default function Index(): React.ReactElement {
    const { logicalName, resource, columns, form } = useRequest()

    return (
        <Box>
            <ModalAndDataTable
                resource={resource}
                logicalName={logicalName}
                modalSize="100%"
                form={form}
                tableColumns={columns}
            >
                <GridItemsLayout
                    leftTop={<PatientInformation />}
                    leftCenter={<ConditionForm />}
                    leftBottom={<InsuranceForm />}
                    rightTop={<InstractionForm />}
                    rightButtom={<AppointmentForm />}
                />
            </ModalAndDataTable>
        </Box>
    )
}
