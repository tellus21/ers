import { atom } from 'jotai'
import {
    RequestFormValues,
    requestInitialValue,
} from '@/pages/requests/requestFeature'
import {
    PatientFormValues,
    patientInitialValues,
} from '@/pages/patients/patientFeature'
import {
    ConditionFormValues,
    conditionInitialValues,
} from '../condition/conditionFeature'
import {
    InsuranceFormValues,
    insuranceInitialValues,
} from '../insurance/insuranceFeature'
import {
    InstructionFormValues,
    instructionInitialValues,
} from '@/pages/requests/instruction/instractionFeature'

export const editedRequestAtom = atom<RequestFormValues>(requestInitialValue)
export const displayPatientAtom = atom<PatientFormValues>(patientInitialValues)
export const editedConditionAtom = atom<ConditionFormValues>(
    conditionInitialValues
)
export const editedInsuranceAtom = atom<InsuranceFormValues>(
    insuranceInitialValues
)
export const editedInstructionAtom = atom<InstructionFormValues>(
    instructionInitialValues
)
export const editedAppointmentAtom =
    atom<RequestFormValues>(requestInitialValue)
