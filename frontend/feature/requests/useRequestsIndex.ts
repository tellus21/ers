import { useRequestFeature } from './requestFeature'
import { useDisclosure } from '@mantine/hooks'
import { useAtom, useSetAtom } from 'jotai'
import {
    editedInstructionAtom,
    editedRequestAtom,
} from './contexts/requestContexts'
import { useConditionFeature } from './condition/conditionFeature'
import { usePatientFeature } from '../patients/patientFeature'
import { useInsuranceFeature } from './insurance/insuranceFeature'
import { useInstructionFeature } from './instruction/instractionFeature'
import { useAppointmentFeature } from './appointment/appointmentFeature'

// Requestのindexを使用するためのカスタムフック
export const useRequestsIndex = () => {
    // Requestのindexを使用するためのカスタムフック
    const {
        logicalName: requestLogicalName,
        columns: requestColumns,
        query: requestsQuery,
    } = useRequestFeature()

    // Patient用のFeatureを使用するためのカスタムフック
    const {
        logicalName: patientLogicalName,
        resource: patientResource,
        form: patientForm,
        query: patientsQuery,
        fields: patientFields,
    } = usePatientFeature()

    // Condition用のFeatureを使用するためのカスタムフック
    const {
        logicalName: conditionLogicalName,
        resource: conditionResource,
        form: conditionForm,
        query: conditionsQuery,
        fields: conditionFields,
    } = useConditionFeature()

    // Insurance用のFeatureを使用するためのカスタムフック
    const {
        logicalName: insuranceLogicalName,
        resource: insuranceResource,
        form: insuranceForm,
        query: insurancesQuery,
        fields: insuranceFields,
    } = useInsuranceFeature()

    // Instruction用のFeatureを使用するためのカスタムフック
    const {
        logicalName: instructionLogicalName,
        resource: instructionResource,
        form: instructionForm,
        query: instructionsQuery,
        fields: instructionFields,
    } = useInstructionFeature()

    // Appointment用のFeatureを使用するためのカスタムフック
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

    // 編集中のRequestを変更する関数を取得
    const setEditedRequest = useSetAtom(editedRequestAtom)

    // 編集中のInstructionを変更する関数を取得
    const setEditedInstruction = useSetAtom(editedInstructionAtom)

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
        setEditedInstruction,
    }
}
