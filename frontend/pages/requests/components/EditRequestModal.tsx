import { Modal } from '@mantine/core'
import { GridLayout } from './GridLayout'
import { RequestMetaData } from '../request-metadata/RequestMetaData'
import { AppointmentForm } from '../appointment/AppointmentForm'
import { DisplayPatient } from '../patient/DisplayPatient'
import { ConditionForm } from '../condition/ConditionForm'
import { InsuranceForm } from '../insurance/InsuranceForm'
import { InstructionForm } from '../instruction/InstructionForm'

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
                leftCenter={<ConditionForm />}
                leftBottom={<InsuranceForm />}
                rightTop={<InstructionForm />}
                rightButtom={<AppointmentForm />}
            />
        </Modal>
    )
}
