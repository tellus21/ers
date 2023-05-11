import { useRequestFeature } from './requestFeature'
import { useDisclosure } from '@mantine/hooks'
import { useAtom, useSetAtom } from 'jotai'
import {
    displayPatientAtom,
    editedAppointmentAtom,
    editedConditionAtom,
    editedInstructionAtom,
    editedInsuranceAtom,
    editedRequestAtom,
} from './contexts/requestContexts'
import { useConditionFeature } from './condition/conditionFeature'
import { usePatientFeature } from '../patients/patientFeature'
import { useInsuranceFeature } from './insurance/insuranceFeature'
import { useInstructionFeature } from './instruction/instractionFeature'
import { useAppointmentFeature } from './appointment/appointmentFeature'

// Requestのindexを使用するためのカスタムフック
export const useRequestsIndex = () => {
    // Requestから論理名、列、クエリを取得
    const { logicalName, columns, query: requests } = useRequestFeature()
    // 編集中のRequestを変更する関数を取得
    // const setEditedRequest = useSetAtom(editedRequestAtom)
    const [editedRequest, setEditedRequest] = useAtom(editedRequestAtom)

    const { query: patients } = usePatientFeature()
    const [displayPatient, setDisplayPatient] = useAtom(displayPatientAtom)

    const { query: conditions, form: conditionForm } = useConditionFeature()
    const [editedCondition, setEditedCondition] = useAtom(editedConditionAtom)

    const { query: insurances, form: insuranceForm } = useInsuranceFeature()
    const [editedInsurance, setEditedInsurance] = useAtom(editedInsuranceAtom)

    const { query: instructions, form: instructionForm } =
        useInstructionFeature()
    const [editedInstruction, setEditedInstruction] = useAtom(
        editedInstructionAtom
    )

    const { query: appointments, form: appointmentForm } =
        useAppointmentFeature()
    const [editedAppointment, setEditedAppointment] = useAtom(
        editedAppointmentAtom
    )

    // Request作成モーダルを開閉するための状態を保持
    const [createRequestModalOpend, createRequestModalHandlers] =
        useDisclosure(false)

    // Request編集モーダルを開閉するための状態を保持
    const [editRequestModalOpend, editRequestModalHandlers] =
        useDisclosure(false)

    return {
        logicalName,
        columns,
        requests,
        editedRequest,
        setEditedRequest,
        patients,
        displayPatient,
        setDisplayPatient,
        conditions,
        conditionForm,
        editedCondition,
        setEditedCondition,
        insurances,
        insuranceForm,
        editedInsurance,
        setEditedInsurance,
        instructions,
        instructionForm,
        editedInstruction,
        setEditedInstruction,
        appointments,
        appointmentForm,
        editedAppointment,
        setEditedAppointment,
        createRequestModalOpend,
        createRequestModalHandlers,
        editRequestModalOpend,
        editRequestModalHandlers,
    }
}
