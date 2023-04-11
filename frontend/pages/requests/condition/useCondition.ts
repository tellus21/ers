import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { isNotEmpty, useForm } from '@mantine/form'

export function useCondition() {
    // ---【Name】---
    const logicalName = '患者状況'
    const physicalName = 'condition'
    const resource = 'conditions'

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface Condition {
        id: number
        request_id: number
        walking_state: string
        accompaniment: string
        pickup: string
        dementia: string
        oxygen: string
        oxygen_amount: string
        allergy: string
        allergy_content: string
        infection: string
        is_hbs_antigen: boolean
        is_hcv: boolean
        is_syphilis: boolean
        is_hiv: boolean
        is_mrsa: boolean
        other_infection: string
        is_intra_metal: boolean
        intra_metal_content: string
        is_alcohol_prohibition: boolean
        is_pacemaker: boolean
        day_week: string
        diagnosis_day: string
        surgery_history: string
        other: string
        anything_memo: string
        created_at: Date
        updated_at: Date
        deleted_at: Date
    }

    //検討中
    // ---【Table】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
    ]

    // ---【FormValues】---
    type FormValues = Omit<
        Condition,
        'id' | 'created_at' | 'updated_at' | 'deleted_at'
    >

    // ---【InitialValues】---
    const initialValues: FormValues = {
        request_id: 0,
        walking_state: '',
        accompaniment: '',
        pickup: '',
        dementia: '',
        oxygen: '',
        oxygen_amount: '',
        allergy: '',
        allergy_content: '',
        infection: '',
        is_hbs_antigen: false,
        is_hcv: false,
        is_syphilis: false,
        is_hiv: false,
        is_mrsa: false,
        other_infection: '',
        is_intra_metal: false,
        intra_metal_content: '',
        is_alcohol_prohibition: false,
        is_pacemaker: false,
        day_week: '',
        diagnosis_day: '',
        surgery_history: '',
        other: '',
        anything_memo: '',
    }

    // ---【Validate】---
    const validate = {
        walking_state: isNotEmpty(isNotEmptyErrorMessage),
        vaaccompaniment: isNotEmpty(isNotEmptyErrorMessage),
        pickup: isNotEmpty(isNotEmptyErrorMessage),
        dementia: isNotEmpty(isNotEmptyErrorMessage),
        oxygen: isNotEmpty(isNotEmptyErrorMessage),
        allergy: isNotEmpty(isNotEmptyErrorMessage),
        infection: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Fields】---
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

    const fields = { first: first, second: second }
    return {
        logicalName,
        physicalName,
        resource,
        query,
        columns,
        form,
        fields,
    }
}
