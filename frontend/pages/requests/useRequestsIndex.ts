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
    const {
        logicalName: requestLogicalName,
        columns: requestColumns,
        query: requestsQuery,
    } = useRequestFeature()

    const {
        logicalName: patientLogicalName,
        resource: patientResource,
        form: patientForm,
        query: patientsQuery,
        fields: patientFields,
    } = usePatientFeature()

    const {
        logicalName: conditionLogicalName,
        resource: conditionResource,
        form: conditionForm,
        query: conditionsQuery,
        fields: conditionFields,
    } = useConditionFeature()

    const {
        logicalName: insuranceLogicalName,
        resource: insuranceResource,
        form: insuranceForm,
        query: insurancesQuery,
        fields: insuranceFields,
    } = useInsuranceFeature()

    const {
        logicalName: instructionLogicalName,
        resource: instructionResource,
        form: instructionForm,
        query: instructionsQuery,
        fields: instructionFields,
    } = useInstructionFeature()

    const {
        logicalName: appointmentLogicalName,
        resource: appointmentResource,
        form: appointmentForm,
        query: appointmentsQuery,
        fields: appointmentFields,
    } = useAppointmentFeature()

    // Request作成モーダルを開閉するための状態を保持
    const [createRequestModalOpend, createRequestModalHandlers] =
        useDisclosure(false)

    // Request編集モーダルを開閉するための状態を保持
    const [editRequestModalOpend, editRequestModalHandlers] =
        useDisclosure(false)

    const setEditedRequest = useSetAtom(editedRequestAtom)

    return {
        requestLogicalName,
        requestColumns,
        requestsQuery,
        patientLogicalName,
        patientResource,
        patientForm,
        patientsQuery,
        patientFields,
        conditionLogicalName,
        conditionResource,
        conditionForm,
        conditionsQuery,
        conditionFields,
        insuranceLogicalName,
        insuranceResource,
        insuranceForm,
        insurancesQuery,
        insuranceFields,
        instructionLogicalName,
        instructionResource,
        instructionForm,
        instructionsQuery,
        instructionFields,
        appointmentLogicalName,
        appointmentResource,
        appointmentForm,
        appointmentsQuery,
        appointmentFields,
        createRequestModalOpend,
        createRequestModalHandlers,
        editRequestModalOpend,
        editRequestModalHandlers,
        setEditedRequest,
    }
}
