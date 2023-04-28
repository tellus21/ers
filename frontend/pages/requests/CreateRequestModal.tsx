import { Modal } from '@mantine/core'
import { GridLayout } from './components/GridLayout'
import { RequestMetaData } from './RequestMetaData'
import { PatientInfomation } from './patient-information/PatientInfomation'
import { AppointmentForm } from './appointment/AppointmentForm'
import { useRequestFeature } from './requestFeature'

interface CreateRequestModalProps {
    opened: boolean
    close: () => void
    resource: any
    form: any
}

export function CreateRequestModal({
    opened,
    close,
    resource,
    form,
}: CreateRequestModalProps) {
    return (
        <Modal opened={opened} onClose={close} title="検査依頼作成" size="70%">
            <GridLayout
                top={<RequestMetaData form={form} />}
                leftTop={<PatientInfomation resource={resource} form={form} />}
                // leftCenter={<ConditionFor  />}//依頼idを渡す必要がありそう
                // leftBottom={<InsuranceForm  />}
                // rightTop={<InstractionForm  />}
                // rightButtom={<AppointmentForm/>}
            />
        </Modal>
    )
}
