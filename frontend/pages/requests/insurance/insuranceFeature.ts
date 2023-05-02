import { useQueryBase } from '@/common/hooks'
import { Field } from '@/common/types'
import { useForm } from '@mantine/form'

// ---【Type】---
export interface Insurance {
    id: number
    request_id: number
    insurance_type: string
    public_expense: string
    responsible_city_district: string
    life_insurance_responsible_name: string
    other_medical_insurance: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface InsuranceFormValues extends Insurance {}

// ---【Feature】---
export function useInsuranceFeature() {
    // ---【Name】---
    const logicalName = '保険情報'
    const resource = 'insurances'

    // ---【InitialValues】---
    const initialValues: InsuranceFormValues = {
        id: 0,
        request_id: 0,
        insurance_type: '',
        public_expense: '',
        responsible_city_district: '',
        life_insurance_responsible_name: '',
        other_medical_insurance: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    const validate = {}

    // ---【Form】---
    const form = useForm<InsuranceFormValues>({
        initialValues: initialValues,
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
            formPath: 'public_expense',
            component: 'Select',
            props: {
                label: '公費負担',
                data: ['老初', '障初', '特定医療費', '老課', '障課'],
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
