import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Field, UseObject } from '@/common/types'
import { isNotEmpty, useForm } from '@mantine/form'

export function useCondition(): UseObject {
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
        types_of_infection: string
        other_infection: string
        intra_metal: string
        intra_metal_content: string
        other_situations: string
        day_week: string
        diagnosis_day: string
        surgery_history: string
        other: string
        anything_memo: string
        created_at: Date
        updated_at: Date
        deleted_at: Date | null
    }

    // ---【FormValues】---
    type FormValues = Omit<Condition, 'id'>

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
        types_of_infection: '',
        other_infection: '',
        intra_metal: '',
        intra_metal_content: '',
        other_situations: '',
        day_week: '',
        diagnosis_day: '',
        surgery_history: '',
        other: '',
        anything_memo: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    // ---【Validate】---
    const validate = {
        walking_state: isNotEmpty(isNotEmptyErrorMessage),
        accompaniment: isNotEmpty(isNotEmptyErrorMessage),
        pickup: isNotEmpty(isNotEmptyErrorMessage),
        dementia: isNotEmpty(isNotEmptyErrorMessage),
        oxygen: isNotEmpty(isNotEmptyErrorMessage),
        allergy: isNotEmpty(isNotEmptyErrorMessage),
        infection: isNotEmpty(isNotEmptyErrorMessage),
        intra_metal: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields: { condition_1: Field[]; condition_2: Field[] } = {
        condition_1: [
            {
                formPath: 'walking_state',
                component: 'Select',
                props: {
                    label: '歩行状態',
                    data: [
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
                formPath: 'accompaniment',
                component: 'Select',
                props: {
                    label: '付添',
                    data: [
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
                formPath: 'pickup',
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
                formPath: 'oxygen_amount',
                component: 'TextInput',
                props: {
                    label: '酸素量(L/分)',
                },
            },
            {
                formPath: 'allergy',
                component: 'RadioYesNoUnknown',
                props: {
                    label: 'アレルギー',
                    withAsterisk: true,
                },
            },
            {
                formPath: 'allergy_content',
                component: 'TextInput',
                props: {
                    label: 'アレルギー内容',
                },
            },
        ],
        condition_2: [
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
                formPath: 'types_of_infection',
                component: 'CheckboxGroup',
                props: {
                    label: '感染症の種類',
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
                formPath: 'intra_metal',
                component: 'RadioYesNoUnknown',
                props: {
                    label: '体内金属',
                    withAsterisk: true,
                },
            },
            {
                formPath: 'intra_metal_content',
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
                formPath: 'day_week',
                component: 'CheckboxGroup',
                props: {
                    label: 'デイの曜日',
                    children: [
                        {
                            label: '月',
                            value: 'mon',
                        },
                        {
                            label: '火',
                            value: 'tues',
                        },
                        {
                            label: '水',
                            value: 'wed',
                        },
                        {
                            label: '木',
                            value: 'thurs',
                        },
                        {
                            label: '金',
                            value: 'fri',
                        },
                        {
                            label: '土',
                            value: 'sat',
                        },
                        {
                            label: '日',
                            value: 'sun',
                        },
                    ],
                },
            },
            {
                formPath: 'diagnosis_day',
                component: 'TextInput',
                props: {
                    label: '診療日',
                },
            },
            {
                formPath: 'surgery_history',
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
        ],
    }

    return {
        logicalName,
        physicalName,
        resource,
        query,
        form,
        fields,
    }
}
