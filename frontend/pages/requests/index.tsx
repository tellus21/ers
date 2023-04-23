import { ModalAndDataTable } from '@/pages/components/ModalAndDataTable'
import { ConditionForm } from './condition/ConditionForm'

import { AppointmentForm } from './appointment/AppointmentForm'
import { PatientInformation } from './patient-information/PatientInformation'
import { InstractionForm } from './instruction/InstractionForm'
import { InsuranceForm } from './insurance/InsuranceForm'
import { useRequestFeature } from './useRequestFeature'
import { RequestLayout } from './components/RequestLayout'
import { RequestMetaData } from './components/MetaData'

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
            <RequestLayout
                Top={<RequestMetaData />}
                leftTop={<PatientInformation />}
                leftCenter={<ConditionForm />}
                leftBottom={<InsuranceForm />}
                rightTop={<InstractionForm />}
                rightButtom={<AppointmentForm />}
            />
        </ModalAndDataTable>
    )
}
