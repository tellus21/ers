import { useState } from 'react'
import { useSetAtom } from 'jotai'
import {
    patientInitialValues,
    usePatientFeature,
} from '@/feature/patients/patientFeature'
import { editedInstructionAtom, editedOrderAtom } from '@/common/contexts'

export const useCreateOrderModal = () => {
    // 患者情報を取得するためのhook
    const { query: patients, columns } = usePatientFeature()

    // 選択された患者を保持するstate
    const [selectedPatient, setSelectedPatient] = useState(patientInitialValues)

    // 編集中のOrderを変更する関数を取得
    const setEditedOrder = useSetAtom(editedOrderAtom)

    // 編集中のInstructionを変更する関数を取得
    const setEditedInstruction = useSetAtom(editedInstructionAtom)

    return {
        patients,
        columns,
        selectedPatient,
        setSelectedPatient,
        setEditedOrder,
        setEditedInstruction,
    }
}
