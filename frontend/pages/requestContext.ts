import { atom } from 'jotai'
import {
    RequestFormValues,
    requestInitialValue,
} from './requests/requestFeature'
import {
    InstructionFormValues,
    instructionInitialValues,
} from './requests/instruction/instractionFeature'

export const editedRequestAtom = atom<RequestFormValues>(requestInitialValue)
export const editedInstructionAtom = atom<InstructionFormValues>(
    instructionInitialValues
)
