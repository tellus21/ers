import { useQueryBase } from '@/common/hooks/NormalMutate'
import { Patient } from '../patients/patientFeature'
import { User } from '../users/UserFeature'
import dayjs from 'dayjs'
import { Instruction } from './instruction/instractionFeature'

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
        { accessor: 'id', title: 'id', sortable: true },
        { accessor: 'is_confirmed', title: '依頼者確認', sortable: true },
        { accessor: 'progress_status', title: '進捗状況', sortable: true },
        {
            accessor: 'created_at',
            title: '依頼作成日',
            sortable: true,
            render: ({ created_at }: { created_at: Date }) => {
                const date = dayjs(created_at)
                return date.format('YYYY/MM/DD')
            },
        },
        { accessor: 'user.last_name', title: '作成者', sortable: true },
        {
            accessor: 'patient.home_care_clinic.name',
            title: '在宅クリニック名',
            sortable: true,
        },
        {
            accessor: 'patient.karte_number_home',
            title: '在宅ID',
            sortable: true,
        },
        {
            accessor: 'patient.nursing_home.name',
            title: '入居先',
            sortable: true,
        },
        {
            accessor: 'patient.nursing_home.alert_level',
            title: '警戒レベル',
            sortable: true,
        },
        {
            accessor: 'patient.name',
            title: '患者氏名',
            sortable: true,
            render: ({ patient }: { patient: Patient }) =>
                `${patient.last_name} ${patient.first_name}`,
        },
        {
            accessor: 'patient.age',
            title: '年齢',
            sortable: true,
            render: ({ patient }: { patient: Patient }) =>
                `${dayjs().diff(patient.birthday, 'year')}歳`,
        },
        { accessor: 'patient.gender', title: '性別' },
        { accessor: 'insurance.insurance_type', title: '保険種別' },
        { accessor: '', title: '問診票有無' },
        { accessor: 'instruction.examination_clinic.name', title: '検査施設' },
        {
            accessor:
                'patient.instruction.appointment.examination_clinic_karte_number',
            title: '検査施設ID',
        },
        // { accessor: '', title: '検査内容' },
        {
            accessor: 'instruction.appointment.scheduled_confirmation_date',
            title: '予約日',
            sortable: true,
            render: ({ instruction }) => {
                const date = instruction.appointment.scheduled_confirmation_date
                return date ? dayjs(date).format('YYYY/MM/DD') : ''
            },
        },
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
