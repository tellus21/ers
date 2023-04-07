import { Box } from '@mantine/core'
import { useExam } from './useExam'
import { ModalAndDataTable } from '@/common/components/ModalAndDataTable'
import { GridItemsLayout } from '@/common/components/layout/GridItemsLayout'
import { PatientInformation } from './patient-information/PatientInformation'
import { PatientStatusForm } from './patient-status/PatientStatusForm'
import { InsuranceForm } from './insurance/InsuranceForm'

import { ReservationInformationForm } from './reservation-information/ReservationInformationForm'
import { TabsSelectDirection } from './direction/TabsSelectDirection'

export default function Index() {
    const { logicalName, physicalName, feature, query, columns, form } =
        useExam()

    return (
        <Box>
            <ModalAndDataTable
                feature={feature}
                logicalName={logicalName}
                modalSize="100%"
                form={form}
                tableColumns={columns}
            >
                <GridItemsLayout
                    leftTop={<PatientInformation />}
                    leftCenter={<PatientStatusForm />}
                    leftBottom={<InsuranceForm />}
                    // rightTop={<RequestForm form={form} />}
                    rightTop={<TabsSelectDirection />}
                    rightButtom={<ReservationInformationForm />}
                />
            </ModalAndDataTable>
        </Box>
    )
}
