import { atom } from 'jotai'
import {
    RequestFormValues,
    requestInitialValue,
} from '@/pages/requests/requestFeature'
import {
    InstructionFormValues,
    instructionInitialValues,
} from '@/pages/requests/instruction/instractionFeature'
import {
    ExaminationClinicFormValues,
    useExaminationClinicFeature,
} from '@/pages/examination-clinics/examinationClinicFeature'

export const editedExaminationAtom = atom<ExaminationClinicFormValues>()

export const editedRequestAtom = atom<RequestFormValues>(requestInitialValue)
export const editedInstructionAtom = atom<InstructionFormValues>(
    instructionInitialValues
)
