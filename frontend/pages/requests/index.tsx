import { Box } from '@mantine/core'
import { ModalAndDataTable } from '@/common/components/ModalAndDataTable'
import { GridItemsLayout } from '@/common/components/layout/GridItemsLayout'
import { useRequest } from './useRequest'
import { PatientInformation } from '../exams/patient-information/PatientInformation'
import { PatientStatusForm } from './condition/ConditionForm'
import { InsuranceForm } from '../exams/insurance/InsuranceForm'
import { TabsSelectDirection } from '../exams/direction/TabsSelectDirection'
import { ReservationInformationForm } from '../exams/reservation-information/ReservationInformationForm'

export default function Index() {
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
                    leftCenter={<PatientStatusForm />}
                    leftBottom={<InsuranceForm />}
                    rightTop={<TabsSelectDirection />}
                    rightButtom={<ReservationInformationForm />}
                />
            </ModalAndDataTable>
        </Box>
    )
}
