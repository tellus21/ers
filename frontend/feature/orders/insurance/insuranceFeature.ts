import { useQueryBase } from '@/common/hooks/NormalMutate'
import { Field } from '@/common/types'
import { useForm } from '@mantine/form'

// ---【Type】---
export interface Insurance {
    id: number
    order_id: number
    insurance_type: string
    is_old_first: boolean
    is_disabled_first: boolean
    is_special_medical_expense: boolean
    is_old_tax: boolean
    is_disabled_tax: boolean
    responsible_city_district: string
    life_insurance_responsible_name: string
    other_medical_insurance: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface InsuranceFormValues extends Insurance {}

// ---【InitialValues】---
export const insuranceInitialValues: InsuranceFormValues = {
    id: 0,
    order_id: 0,
    insurance_type: '',
    is_old_first: false,
    is_disabled_first: false,
    is_special_medical_expense: false,
    is_old_tax: false,
    is_disabled_tax: false,
    responsible_city_district: '',
    life_insurance_responsible_name: '',
    other_medical_insurance: '',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
}

// ---【Feature】---
export function useInsuranceFeature() {
    // ---【Name】---
    const logicalName = '保険情報'
    const resource = 'insurances'

    const validate = {}

    // ---【Form】---
    const form = useForm<InsuranceFormValues>({
        initialValues: insuranceInitialValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'insurance_type',
            component: 'Select',
            props: {
                label: '保険種類',
                data: [
                    '生活保護',
                    '後期高齢1割',
                    '後期高齢2割',
                    '後期高齢3割',
                    '国保1割',
                    '国保2割',
                    '国保3割',
                    '社保1割',
                    '社保2割',
                    '社保3割',
                ],
            },
        },
        {
            component: 'Checkboxes',
            props: {
                label: '公費負担',
                checkboxProps: [
                    { label: '老初', formpath: 'is_old_first' }, // pathを小文字にしないとエラーになる
                    { label: '障初', formpath: 'is_disabled_first' },
                    {
                        label: '特定医療費',
                        formpath: 'is_special_medical_expense',
                    },
                    { label: '老課', formpath: 'is_old_tax' },
                    { label: '障課', formpath: 'is_disabled_tax' },
                ],
            },
        },
        {
            formPath: 'responsible_city_district',
            component: 'Select',
            props: {
                label: '担当市・担当区',
                data: [
                    '中央区',
                    '北区',
                    '東区',
                    '白石区',
                    '厚別区',
                    '豊平区',
                    '清田区',
                    '南区',
                    '西区',
                    '手稲区',
                    '江別市',
                    '恵庭市',
                    '北広島市',
                ],
            },
        },
        {
            formPath: 'life_insurance_responsible_name',
            component: 'TextInput',
            props: {
                label: '生保担当者名',
            },
        },
        {
            formPath: 'other_medical_insurance',
            component: 'TextInput',
            props: {
                label: '医療保険他',
            },
        },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    return {
        logicalName,
        resource,
        form,
        query,
        fields,
    }
}
