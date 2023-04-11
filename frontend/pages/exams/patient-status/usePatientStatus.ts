import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'

export function usePatientStatus() {
    // ---【Name】---
    const logicalName = '患者状況'
    const physicalName = 'patientStatus'
    const resource = 'patient_status'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface PatientStatus {
        id: string
        // walking_state: string
        // attendant: string
        // pick_up: string
        // is_dementia: boolean
        // is_oxygen: boolean
        // oxygen_quantity: string
        // is_allergy: boolean
        // allergy_detail: string
        // is_infection: boolean
        // test
        infections: string[]
        other_situations: string[]
        // is_hbs_antigen: boolean
        // is_hcv: boolean
        // is_hiv: boolean
        // is_mrsa: boolean
        // is_body_during_metal: boolean
        // is_alcohol_prohibiting: boolean
        // is_pace_maker: boolean
        // day_weekday: string
        // medical_care_date: string
        // surgery_medical_history: string
        // other: string
        // anything_memo: string
    }

    // ---【Form】---
    // TODO:created_atなどを作ったあとに、それらを抜く
    type FormValues = PatientStatus
    //  type PatientStatusFormValues = Omit<PatientStatus, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        // walking_state: '',
        // attendant: '',
        // pick_up: '',
        // is_dementia: false,
        // is_oxygen: false,
        // oxygen_quantity: '',
        // is_allergy: false,
        // allergy_detail: '',
        // is_infection: false,
        // test
        infections: [],
        other_situations: [],
        // is_hbs_antigen: false,
        // is_hcv: false,
        // is_hiv: false,
        // is_mrsa: false,
        // is_body_during_metal: false,
        // is_alcohol_prohibiting: false,
        // is_pace_maker: false,
        // day_weekday: '',
        // medical_care_date: '',
        // surgery_medical_history: '',
        // other: '',
        // anything_memo: '',
    }

    const validate = {
        // request_id: isNotEmpty(isNotEmptyErrorMessage),
        // walking_state: isNotEmpty(isNotEmptyErrorMessage),
        // dementia: isNotEmpty(isNotEmptyErrorMessage),
        // oxygen: isNotEmpty(isNotEmptyErrorMessage),
        // allergy: isNotEmpty(isNotEmptyErrorMessage),
        // infection: isNotEmpty(isNotEmptyErrorMessage),
        // other: isNotEmpty(isNotEmptyErrorMessage),
        // notice: isNotEmpty(isNotEmptyErrorMessage),
        // anything_memo: isNotEmpty(isNotEmptyErrorMessage),
    }

    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields = { first: first, second: second }

    return {
        logicalName,
        physicalName,
        resource,
        query,
        form,
        fields,
    }
}

const first = [
    {
        formPath: 'walking_state',
        component: 'Select',
        props: {
            label: '歩行状態',
            data: [
                '　',
                '独歩',
                '独歩・杖歩行',
                '歩行器',
                '車椅子・立位可',
                '車椅子・立位不可',
                'ストレッチャー',
            ],
            withAsterisk: true,
        },
    },
    {
        formPath: 'attendant',
        component: 'Select',
        props: {
            label: '付添',
            data: [
                '　',
                '不要',
                '施設',
                '家族',
                '必要・院内',
                '必要・送迎院内',
            ],
            withAsterisk: true,
        },
    },
    {
        formPath: 'pick_up',
        component: 'RadioYesNoUnknown',
        props: {
            label: '送迎',
            withAsterisk: true,
        },
    },

    {
        formPath: 'dementia',
        component: 'RadioYesNoUnknown',
        props: {
            label: '認知症',
            withAsterisk: true,
        },
    },
    {
        formPath: 'oxygen',
        component: 'RadioYesNoUnknown',
        props: {
            label: '酸素',
            withAsterisk: true,
        },
    },
    {
        formPath: 'oxygen_quantity',
        component: 'TextInput',
        props: {
            label: '酸素量(L/分)',
        },
    },
    {
        formPath: 'allergy',
        component: 'RadioYesNoUnknown',
        props: { label: 'アレルギー' },
        withAsterisk: true,
    },
    {
        formPath: 'allergy_detail',
        component: 'TextInput',
        props: {
            label: 'アレルギー内容',
        },
    },
]

const second = [
    {
        formPath: 'infection',
        component: 'RadioYesNoUnknown',
        props: {
            label: '感染症',
            withAsterisk: true,
        },
    },
    { component: 'Blank' },
    {
        formPath: 'infections',
        component: 'CheckboxGroup',
        props: {
            label: '感染症選択',
            children: [
                {
                    label: 'HBS抗原',
                    value: 'is_hbs_antigen',
                },
                {
                    label: 'HCV',
                    value: 'is_hcv',
                },
                {
                    label: '梅毒',
                    value: 'is_syphilis',
                },
                {
                    label: 'HIV',
                    value: 'is_hiv',
                },
                {
                    label: 'MRSA',
                    value: 'is_mrsa',
                },
            ],
        },
    },
    {
        formPath: 'other_infection',
        component: 'TextInput',
        props: {
            label: 'その他感染症',
        },
    },
    {
        formPath: 'is_body_during_metal',
        component: 'RadioYesNoUnknown',
        props: {
            label: '体内金属',
            withAsterisk: true,
        },
    },
    {
        formPath: 'body_during_metal_detail',
        component: 'TextInput',
        props: {
            label: '体内金属内容',
        },
    },
    {
        formPath: 'other_situations',
        component: 'CheckboxGroup',
        props: {
            label: 'その他状況',
            children: [
                {
                    label: 'アルコール禁',
                    value: 'is_alcohol_prohibiting',
                },
                {
                    label: 'ペースメーカー有',
                    value: 'is_pace_maker',
                },
            ],
        },
    },
    { component: 'Blank' },
    {
        formPath: 'day_service_days',
        component: 'CheckboxGroup',
        props: {
            label: 'デイの曜日',
            children: [
                {
                    label: '月',
                    value: 'monday',
                },
                {
                    label: '火',
                    value: 'tuesday',
                },
                {
                    label: '水',
                    value: 'wednesday',
                },
                {
                    label: '木',
                    value: 'thursday',
                },
                {
                    label: '金',
                    value: 'friday',
                },
                {
                    label: '土',
                    value: 'saturday',
                },
                {
                    label: '日',
                    value: 'sunday',
                },
            ],
        },
    },
    {
        formPath: 'medical_care_date',
        component: 'TextInput',
        props: {
            label: '診療日',
        },
    },
    {
        formPath: 'surgery_medical_history',
        component: 'Textarea',
        props: {
            label: '手術既往歴',
        },
    },
    {
        formPath: 'other',
        component: 'Textarea',
        props: {
            label: 'その他',
        },
    },
    {
        formPath: 'anything_memo',
        component: 'Textarea',
        props: {
            label: 'なんでもメモ',
        },
    },
]
