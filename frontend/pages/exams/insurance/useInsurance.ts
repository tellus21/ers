import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'

export function useInsurance() {
    // ---【Name】---
    const logicalName = '保険情報'
    const physicalName = 'insurance'
    const resource = 'insurances'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface Insurance {
        id: string
        request_id: string
        insurance_type: string
        public_expense_burden: string
    }

    // ---【Form】---
    // TODO:created_atなどを作ったあとに、それらを抜く
    type FormValues = Insurance
    //  type InsuranceFormValues = Omit<Insurance, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        request_id: '',
        insurance_type: '',
        public_expense_burden: '',
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
    const fields: Fields[] = [
        {
            component: 'Select',
            props: {
                label: '保険種類',
                data: [
                    '　',
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
                withAsterisk: true,
            },
            formPath: 'insurance_type',
        },
        {
            component: 'Select',
            props: {
                label: '公費負担',
                data: ['　', '老初', '障初', '特定医療費', '老課', '障課'],
                withAsterisk: true,
            },
            formPath: 'public_expense_burden',
        },
        {
            component: 'Select',
            props: {
                label: '担当市・担当区',
                data: [
                    '　',
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
                withAsterisk: true,
            },
            formPath: 'rep_city_or_ward',
        },
        {
            component: 'TextInput',
            props: {
                label: '生保担当者名',
                withAsterisk: true,
            },
            formPath: 'rep_person_name',
        },
        {
            component: 'TextInput',
            props: {
                label: '医療保険他',
                withAsterisk: true,
            },
            formPath: 'medical_insurance_other',
        },
    ]
    return {
        logicalName,
        physicalName,
        resource,
        query,
        form,
        fields,
    }
}
