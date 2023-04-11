import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'

export function useNursingHome() {
    // ---【Name】---
    const logicalName = '入居施設'
    const physicalName = 'nursing_home'
    const resource = 'nursing_homes'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface NursingHome {
        id: string
        name: string
        furigana: string
        management_company: string
        postal_code: string
        address: string
        phone_number: string
        fax_number: string
        main_manager: string
        sub_manager: string
        pick_up_needs_time: string
    }

    // ---【DataTable】---
    // DataTableのカラム
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
    ]

    // ---【Form】---
    // TODO:created_atなどを作ったあとに、それらを抜く
    type FormValues = NursingHome
    //  type NursingHomeFormValues = Omit<NursingHome, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        name: '',
        furigana: '',
        management_company: '',
        postal_code: '',
        address: '',
        phone_number: '',
        fax_number: '',
        main_manager: '',
        sub_manager: '',
        pick_up_needs_time: '',
    }

    const validate = {
        // name: isNotEmpty(isNotEmptyErrorMessage),
        // furigana: isNotEmpty(isNotEmptyErrorMessage),
        // management_company: isNotEmpty(isNotEmptyErrorMessage),
    }

    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields: Fields[] = [
        {
            component: 'TextInput',
            props: {
                label: '施設名',
                withAsterisk: true,
            },
            formPath: 'name',
        },
        {
            component: 'TextInput',
            props: {
                label: 'フリガナ',
                withAsterisk: true,
            },
            formPath: 'furigana',
        },
        {
            component: 'TextInput',
            props: {
                label: '運営会社',
                withAsterisk: true,
            },
            formPath: 'management_company',
        },
        {
            component: 'TextInput',
            props: {
                label: '郵便番号',
                maxLength: 10,
                withAsterisk: true,
            },
            formPath: 'postal_code',
        },
        {
            component: 'TextInput',
            props: {
                label: '住所',
                maxLength: 100,
                withAsterisk: true,
            },
            formPath: 'address',
        },
        {
            component: 'TextInput',
            props: {
                label: '電話番号',
                maxLength: 13,
                withAsterisk: true,
            },
            formPath: 'phone_number',
        },
        {
            component: 'TextInput',
            props: {
                label: 'FAX番号',
                maxLength: 13,
                withAsterisk: true,
            },
            formPath: 'fax_number',
        },
        {
            component: 'TextInput',
            props: {
                label: '主担当',
                withAsterisk: true,
            },
            formPath: 'main_manager',
        },
        {
            component: 'TextInput',
            props: {
                label: '副担当',
                withAsterisk: true,
            },
            formPath: 'sub_manager',
        },
        {
            component: 'TextInput',
            props: {
                label: '送迎時間',
                withAsterisk: true,
            },
            formPath: 'pick_up_needs_time',
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
