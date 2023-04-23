import { Box } from '@mantine/core'
import { ModalAndDataTable } from '@/pages/components/ModalAndDataTable'
import { GridItemsLayout } from '@/pages/components/layout/GridItemsLayout'
import { useRequest } from './useRequestFeature'
import { ConditionForm } from './condition/ConditionForm'

import { AppointmentForm } from './appointment/AppointmentForm'
import { PatientInformation } from './patient-information/PatientInformation'
import { InstractionForm } from './instruction/InstractionForm'
import { InsuranceForm } from './insurance/InsuranceForm'

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
                {/* モーダル部分 */}
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
