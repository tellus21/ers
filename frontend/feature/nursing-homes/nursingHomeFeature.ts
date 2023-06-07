import { isNotEmpty, useForm } from '@mantine/form'
import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks/NormalMutate'
import { Field } from '@/common/types'
import { getNames } from '@/common/lib'

// ---【Types】---
export interface NursingHome {
    id: number
    name: string
    kana: string
    company_name: string
    postal_code: string
    address: string
    phone_number: string
    fax_number: string
    main_contact: string
    sub_contact: string
    alert_level: string
    pickup_time_lsi: string
    pickup_time_smile: string
    pickup_time_kotoni: string
    pickup_time_kita: string
    pickup_time_kita_highway: string
    pickup_distance_lsi: string
    pickup_distance_smile: string
    pickup_distance_kotoni: string
    pickup_distance_kita: string
    pickup_distance_kita_highway: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface NursingHomeFormValues extends NursingHome {}

// ---【InitialValues】---
export const nursingHomeInitialValues: NursingHomeFormValues = {
    id: 0,
    name: '',
    kana: '',
    company_name: '',
    postal_code: '',
    address: '',
    phone_number: '',
    fax_number: '',
    main_contact: '',
    sub_contact: '',
    alert_level: '',
    pickup_time_lsi: '',
    pickup_time_smile: '',
    pickup_time_kotoni: '',
    pickup_time_kita: '',
    pickup_time_kita_highway: '',
    pickup_distance_lsi: '',
    pickup_distance_smile: '',
    pickup_distance_kotoni: '',
    pickup_distance_kita: '',
    pickup_distance_kita_highway: '',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
}

// ---【Feature】---
export function useNursingHomeFeature() {
    // ---【Name】---
    const logicalName = '入居施設'
    const resource = 'nursing_homes'

    // ---【Validate】---
    const validate = {
        name: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<NursingHomeFormValues>({
        initialValues: nursingHomeInitialValues,
        validate: validate,
    })

    // ---【DataTable】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
        { accessor: 'main_contact', title: '主担当' },
        { accessor: 'sub_contact', title: '副担当' },
        { accessor: 'alert_level', title: '警戒レベル' },
        { accessor: 'pickup_time_lsi', title: 'LSI' },
        { accessor: 'pickup_time_smile', title: 'スマイル' },
        { accessor: 'pickup_time_kotoni', title: 'ことに' },
        { accessor: 'pickup_time_kita', title: 'きた' },
        { accessor: 'pickup_time_kita_highway', title: 'きた高速' },
    ]

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'name',
            component: 'TextInput',
            props: {
                label: '施設名',
                withAsterisk: true,
            },
        },
        {
            formPath: 'kana',
            component: 'TextInput',
            props: {
                label: 'フリガナ',
            },
        },
        {
            formPath: 'company_name',
            component: 'TextInput',
            props: {
                label: '運営会社',
            },
        },
        {
            component: 'TextInput',
            formPath: 'postal_code',
            props: {
                label: '郵便番号',
                maxLength: 10,
            },
        },
        {
            component: 'TextInput',
            formPath: 'address',
            props: {
                label: '住所',
                maxLength: 100,
            },
        },
        {
            component: 'TextInput',
            formPath: 'phone_number',
            props: {
                label: '電話番号',
                maxLength: 13,
            },
        },
        {
            component: 'TextInput',
            formPath: 'fax_number',
            props: {
                label: 'FAX番号',
                maxLength: 13,
            },
        },
        {
            formPath: 'main_contact',
            component: 'TextInput',
            props: {
                label: '主担当',
            },
        },
        {
            formPath: 'sub_contact',
            component: 'TextInput',
            props: {
                label: '副担当',
            },
        },
        {
            formPath: 'alert_level',
            component: 'Select',
            props: {
                label: '警戒レベル',
                data: ['問題なし', '予約時難', '送迎時難', '要注意', '要警戒'],
            },
        },
        {
            formPath: 'pickup_time_lsi',
            component: 'TextInput',
            props: {
                label: '送迎時間(LSI)',
            },
        },
        {
            formPath: 'pickup_time_smile',
            component: 'TextInput',
            props: {
                label: '送迎時間(スマイル)',
            },
        },
        {
            formPath: 'pickup_time_kotoni',
            component: 'TextInput',
            props: {
                label: '送迎時間(ことに)',
            },
        },
        {
            formPath: 'pickup_time_kita',
            component: 'TextInput',
            props: {
                label: '送迎時間(きた)',
            },
        },
        {
            formPath: 'pickup_time_kita_highway',
            component: 'TextInput',
            props: {
                label: '送迎時間(きた高速)',
            },
        },
        {
            formPath: 'pickup_distance_lsi',
            component: 'TextInput',
            props: {
                label: '送迎距離(LSI)',
            },
        },
        {
            formPath: 'pickup_distance_smile',
            component: 'TextInput',
            props: {
                label: '送迎距離(スマイル)',
            },
        },
        {
            formPath: 'pickup_distance_kotoni',
            component: 'TextInput',
            props: {
                label: '送迎距離(ことに)',
            },
        },
        {
            formPath: 'pickup_distance_kita',
            component: 'TextInput',
            props: {
                label: '送迎距離(きた)',
            },
        },
        {
            formPath: 'pickup_distance_kita_highway',
            component: 'TextInput',
            props: {
                label: '送迎距離(きた高速)',
            },
        },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)
    const nursingHomeNames = getNames(query)

    return {
        logicalName,
        resource,
        query,
        columns,
        form,
        fields,
        nursingHomeNames,
    }
}
