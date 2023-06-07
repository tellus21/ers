import { useQueryBase } from '@/common/hooks/NormalMutate'
import { Patient } from '../patients/patientFeature'
import { User } from '../users/UserFeature'

// ---【Type】---
export interface Order {
    id: number
    user_id: number | null
    patient_id: number | null
    progress_status: string
    alert_level: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    user: User | null
    patient: Patient | null
}

// ---【FormValues】---
export interface OrderFormValues extends Order {}

// ---【InitialValues】---
export const orderInitialValue: OrderFormValues = {
    id: 0,
    user_id: 0,
    patient_id: 0,
    progress_status: '依頼中',
    alert_level: '問題なし',
    created_at: null,
    updated_at: null,
    deleted_at: null,
    user: null,
    patient: null,
}

// ---【Feature】---
export function useOrderFeature() {
    // ---【Name】---
    const logicalName = '検査依頼'
    const resource = 'orders'

    // ---【Table】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'is_confirmed', title: '確認済' },
        { accessor: 'progress_status', title: '進捗状況' },
        { accessor: 'order_date', title: '依頼日' },
        { accessor: 'user.last_name', title: '作成者' },
        {
            accessor: 'patient.home_care_clinic.name',
            title: '在宅クリニック名',
        },
        { accessor: 'patient.karte_number_home', title: '在宅ID' },
        { accessor: 'patient.nursing_home.name', title: '入居先' },
        { accessor: 'patient.nursing_home.alert_level', title: '警戒レベル' },
        { accessor: 'patient.name', title: '患者氏名' },
        //年齢がちゃんと取得できない。。。
        // {
        //     accessor: 'patient.birthday',
        //     title: '年齢',
        //     render: ({ birthday }: { birthday: Date }) =>
        //         dayjs(birthday).format('YYYY/MM/DD'),
        // },
        // { accessor: 'patient.gender', title: '性別' },
        // { accessor: 'condition.insurance_type', title: '保険種別' },
        // { accessor: '', title: '問診票有無' },
        // { accessor: '', title: '検査施設' },
        // { accessor: 'patient.exam_karte_number', title: '検査施設ID' },
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
