import { isNotEmpty, useForm } from '@mantine/form'
import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Field } from '@/common/types'

export function useNursingHome() {
    // ---【Name】---
    const logicalName = '入居施設'
    const physicalName = 'nursing_home'
    const resource = 'nursing_homes'

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface NursingHome {
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
        pickup_time: string
        created_at: Date
        updated_at: Date
        deleted_at: Date | null
    }

    // ---【DataTable】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
    ]

    // ---【FormValues】---
    type FormValues = Omit<NursingHome, 'id'>

    // ---【InitialValues】---
    const initialValues = {
        name: '',
        kana: '',
        company_name: '',
        postal_code: '',
        address: '',
        phone_number: '',
        fax_number: '',
        main_contact: '',
        sub_contact: '',
        pickup_time: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    // ---【Validate】---
    const validate = {
        name: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

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
            formPath: 'pickup_time',
            component: 'TextInput',
            props: {
                label: '送迎時間',
            },
        },
    ]
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