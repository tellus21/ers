import { Box } from '@mantine/core'
import { ModalAndDataTable } from '@/pages/components/ModalAndDataTable'
import { GridItemsLayout } from '@/pages/components/layout/GridItemsLayout'
import { ConditionForm } from './condition/ConditionForm'

import { AppointmentForm } from './appointment/AppointmentForm'
import { PatientInformation } from './patient-information/PatientInformation'
import { InstractionForm } from './instruction/InstractionForm'
import { InsuranceForm } from './insurance/InsuranceForm'
import { useRequestFeature } from './useRequestFeature'

export default function Index() {
    const { logicalName, resource, columns, form, query } = useRequestFeature()

    return (
        <ModalAndDataTable
            logicalName={logicalName}
            modalSize="100%"
            form={form}
            tableColumns={columns}
            query={query}
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
    )
}
