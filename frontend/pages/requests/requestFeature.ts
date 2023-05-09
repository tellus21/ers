import { useQueryBase } from '@/common/hooks'
import { Patient, usePatientFeature } from '../patients/patientFeature'
import { User } from '../users/UserFeature'
import dayjs from 'dayjs'

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
        { accessor: 'is_confirmed', title: '確認済' },
        { accessor: 'status', title: '進捗ステータス' },
        { accessor: 'request_date', title: '依頼日' },
        { accessor: 'user.last_name', title: '作成者' },
        {
            accessor: 'patient.home_care_clinic.name',
            title: '在宅クリニック名',
        },
        { accessor: 'patient.home_karte_number', title: '在宅ID' },
        { accessor: 'patient.nursing_home.name', title: '入居先' },
        { accessor: 'patient.name', title: '患者氏名' },
        //年齢がちゃんと取得できない。。。
        // {
        //     accessor: 'patient.birthday',
        //     title: '年齢',
        //     render: ({ birthday }: { birthday: Date }) =>
        //         dayjs(birthday).format('YYYY/MM/DD'),
        // },
        { accessor: 'patient.gender', title: '性別' },
        // { accessor: '', title: '保険種別' },
        // { accessor: '', title: '問診票有無' },
        // { accessor: '', title: '検査施設' },
        // { accessor: '', title: '検査施設ID' },
        // { accessor: '', title: '検査内容' },
        // { accessor: '', title: '予約日' },
        // { accessor: '', title: '検査確定' },
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
