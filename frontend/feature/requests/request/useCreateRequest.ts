import { useState } from 'react'
import {
    editedInstructionAtom,
    editedRequestAtom,
} from '../contexts/requestContexts'
import { useSetAtom } from 'jotai'
import {
    patientInitialValues,
    usePatientFeature,
} from '@/feature/patients/patientFeature'

export const useCreateRequestModal = () => {
    // 患者情報を取得するためのhook
    const { query: patients, columns } = usePatientFeature()

    // 選択された患者を保持するstate
    const [selectedPatient, setSelectedPatient] = useState(patientInitialValues)

    // 編集中のRequestを変更する関数を取得
    const setEditedRequest = useSetAtom(editedRequestAtom)

    // 編集中のInstructionを変更する関数を取得
    const setEditedInstruction = useSetAtom(editedInstructionAtom)

    return {
        patients,
        columns,
        selectedPatient,
        setSelectedPatient,
        setEditedRequest,
        setEditedInstruction,
    }
}
