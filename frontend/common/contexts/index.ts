import { atom } from 'jotai'
import { UserFormValues, userInitialValues } from '@/feature/users/UserFeature'

export const loginUserAtom = atom<UserFormValues>(userInitialValues)
