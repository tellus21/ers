import { atom } from 'jotai'
import { UserFormValues, userInitialValues } from '@/feature/users/UserFeature'
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
export const loginUserAtom = atom<UserFormValues>(userInitialValues)
