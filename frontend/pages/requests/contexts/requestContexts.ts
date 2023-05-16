import { atom } from 'jotai'
import {
    RequestFormValues,
    requestInitialValue,
} from '@/pages/requests/requestFeature'
import {
    InstructionFormValues,
    instructionInitialValues,
} from '@/pages/requests/instruction/instractionFeature'

export const editedRequestAtom = atom<RequestFormValues>(requestInitialValue)
export const editedInstructionAtom = atom<InstructionFormValues>(
    instructionInitialValues
)
