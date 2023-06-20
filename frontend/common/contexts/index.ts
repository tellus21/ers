import { atom } from 'jotai'
import {
    OrderFormValues,
    orderInitialValue,
} from '../../feature/orders/orderFeature'
import {
    InstructionFormValues,
    instructionInitialValues,
} from '../../feature/orders/instruction/instractionFeature'

export const editedOrderAtom = atom<OrderFormValues>(orderInitialValue)
export const editedInstructionAtom = atom<InstructionFormValues>(
    instructionInitialValues
)
