import { Box } from '@mantine/core'
import { ModalAndDataTable } from '@/common/components/ModalAndDataTable'
import { GridItemsLayout } from '@/common/components/layout/GridItemsLayout'
import { useRequest } from './useRequest'
import { PatientInformation } from '../exams/patient-information/PatientInformation'
import { TabsSelectDirection } from '../exams/direction/TabsSelectDirection'
import { ConditionForm } from './condition/ConditionForm'
import { InsuranceForm } from './insurance/InsuranceForm'
import { AppointmentForm } from './appointment/AppointmentForm'

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
                    rightTop={<TabsSelectDirection />}
                    rightButtom={<AppointmentForm />}
                />
            </ModalAndDataTable>
        </Box>
    )
}
