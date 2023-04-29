import { useQueryBase } from '@/common/hooks'
import { Patient, usePatientFeature } from '../patients/patientFeature'
import { User } from '../users/UserFeature'

// ---【Type】---
export interface Request {
    id: number
    user_id: number | null
    patient_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    user: User | null
    patient: Patient | null
}

// ---【InitialValues】---
export const requestInitialValue = {
    id: 0,
    user_id: 0,
    patient_id: 0,
    created_at: null,
    updated_at: null,
    deleted_at: null,
    user: null,
    patient: null,
}

// ---【Feature】---
export function useRequestFeature() {
    // ---【Name】---
    const logicalName = '検査依頼'
    const resource = 'requests'

    // ---【Table】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: '', title: '進捗ステータス' },
        { accessor: 'user.name', title: '作成者' },
        { accessor: 'patient.home_care_clinic', title: '患者施設' },
        { accessor: 'patient.name', title: '対象患者名' },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Return】---
    return {
        logicalName,
        columns,
        query,
    }
}
