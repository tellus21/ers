import { atom } from 'jotai'
import { OrderFormValues, orderInitialValue } from '../orderFeature'
import {
    InstructionFormValues,
    instructionInitialValues,
} from '../instruction/instractionFeature'

export const editedOrderAtom = atom<OrderFormValues>(orderInitialValue)
export const editedInstructionAtom = atom<InstructionFormValues>(
    instructionInitialValues
)
