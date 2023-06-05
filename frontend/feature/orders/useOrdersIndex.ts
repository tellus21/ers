import { useOrderFeature } from './orderFeature'
import { useDisclosure } from '@mantine/hooks'
import { useAtom, useSetAtom } from 'jotai'
import {
    editedInstructionAtom,
    editedOrderAtom,
} from './contexts/orderContexts'
import { useConditionFeature } from './condition/conditionFeature'
import { usePatientFeature } from '../patients/patientFeature'
import { useInsuranceFeature } from './insurance/insuranceFeature'
import { useInstructionFeature } from './instruction/instractionFeature'
import { useAppointmentFeature } from './appointment/appointmentFeature'

// Orderのindexを使用するためのカスタムフック
export const useOrdersIndex = () => {
    // Orderのindexを使用するためのカスタムフック
    const {
        logicalName: orderLogicalName,
        columns: orderColumns,
        query: ordersQuery,
    } = useOrderFeature()

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

    // Order作成モーダルを開閉するための状態を保持
    const [createOrderModalOpend, createOrderModalHandlers] =
        useDisclosure(false)

    // Order編集モーダルを開閉するための状態を保持
    const [editOrderModalOpend, editOrderModalHandlers] = useDisclosure(false)

    // 編集中のOrderを変更する関数を取得
    const setEditedOrder = useSetAtom(editedOrderAtom)

    // 編集中のInstructionを変更する関数を取得
    const setEditedInstruction = useSetAtom(editedInstructionAtom)

    return {
        orderLogicalName,
        orderColumns,
        ordersQuery,
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
        createOrderModalOpend,
        createOrderModalHandlers,
        editOrderModalOpend,
        editOrderModalHandlers,
        setEditedOrder,
        setEditedInstruction,
    }
}
