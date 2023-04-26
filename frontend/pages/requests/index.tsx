import { ModalAndDataTable } from '@/pages/components/ModalAndDataTable'
import { ConditionForm } from './condition/ConditionForm'

import { AppointmentForm } from './appointment/AppointmentForm'
import { InstractionForm } from './instruction/InstractionForm'
import { InsuranceForm } from './insurance/InsuranceForm'
import { useRequestFeature } from './requestFeature'
import { GridLayout } from './components/GridLayout'
import { RequestMetaData } from './RequestMetaData'
import { PatientInfomation } from './patient-information/PatientInfomation'
import { RequestModalAndDataTable } from './RequestModalAndDataTable'

export default function Index() {
    const {
        logicalName,
        resource,
        columns,
        form: requestForm,
        query,
        fields,
    } = useRequestFeature()

    const requestId = requestForm.values.id

    return (
        <RequestModalAndDataTable
            logicalName={logicalName}
            modalSize="100%"
            form={requestForm}
            tableColumns={columns}
            query={query}
        >
            {/* モーダル部分 */}
            <GridLayout
                top={<RequestMetaData form={requestForm} />}
                leftTop={
                    <PatientInfomation
                        resource={resource}
                        form={requestForm}
                        fields={fields}
                    />
                }
                // leftCenter={<ConditionForm requestId={requestId} />}
                // leftBottom={<InsuranceForm requestId={requestId} />}
                // rightTop={<InstractionForm requestId={requestId} />}
                // rightButtom={<AppointmentForm requestId={requestId} />}
            />
        </RequestModalAndDataTable>
    )
}
