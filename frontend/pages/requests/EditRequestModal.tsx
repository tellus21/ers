import { Modal } from '@mantine/core'
import { GridLayout } from './components/GridLayout'
import { RequestMetaData } from './request-metadata/RequestMetaData'
import { AppointmentForm } from './appointment/AppointmentForm'
import { Request, useRequestFeature } from './requestFeature'
import { DisplayPatient } from './patient/DisplayPatient'
import { ConditionForm } from './condition/ConditionForm'

interface EditRequestModalProps {
    opened: boolean
    close: () => void
    resource: any
}

export function EditRequestModal({
    opened,
    close,
    resource,
}: EditRequestModalProps) {
    return (
        <Modal opened={opened} onClose={close} title="検査依頼作成" size="70%">
            <GridLayout
                top={<RequestMetaData />}
                leftTop={<DisplayPatient />}
                leftCenter={<ConditionForm />} //依頼idを渡す必要がありそう
                // leftBottom={<InsuranceForm  />}
                // rightTop={<InstractionForm  />}
                // rightButtom={<AppointmentForm/>}
            />
        </Modal>
    )
}
