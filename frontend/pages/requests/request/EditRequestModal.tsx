import { Modal } from '@mantine/core'
import { GridLayout } from '../components/GridLayout'
import { RequestMetaData } from '../request-metadata/RequestMetaData'
import { AppointmentForm } from '../appointment/AppointmentForm'
import { Request, useRequestFeature } from '../requestFeature'
import { DisplayPatient } from '../patient/DisplayPatient'
import { ConditionForm } from '../condition/ConditionForm'
import { InsuranceForm } from '../insurance/InsuranceForm'
import { InstractionForm } from '../instruction/InstractionForm'

interface EditRequestModalProps {
    opened: boolean
    close: () => void
}

export function EditRequestModal({ opened, close }: EditRequestModalProps) {
    return (
        <Modal opened={opened} onClose={close} title="検査依頼作成" size="100%">
            <GridLayout
                top={<RequestMetaData />}
                leftTop={<DisplayPatient />}
                leftCenter={<ConditionForm />} //依頼idを渡す必要がありそう
                leftBottom={<InsuranceForm />}
                // rightTop={<InstractionForm />}
                // rightButtom={<AppointmentForm />}
            />
        </Modal>
    )
}
