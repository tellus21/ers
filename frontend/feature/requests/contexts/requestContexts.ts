import { atom } from 'jotai'
import { RequestFormValues, requestInitialValue } from '../requestFeature'
import {
    InstructionFormValues,
    instructionInitialValues,
} from '../instruction/instractionFeature'

export const editedRequestAtom = atom<RequestFormValues>(requestInitialValue)
export const editedInstructionAtom = atom<InstructionFormValues>(
    instructionInitialValues
)
