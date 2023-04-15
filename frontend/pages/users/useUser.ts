import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Field } from '@/common/types'
import { isNotEmpty, useForm } from '@mantine/form'

export function useUser() {
    // ---【Name】---
    const logicalName = 'ユーザ'
    const physicalName = 'user'
    const resource = 'users'

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface User {
        id: number
        home_care_clinic_id: number
        examination_clinic_id: number
        login_name: string
        password: string
        last_name: string
        first_name: string
        authority: string
        email_address: string
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
    type FormValues = Omit<User, 'id'>

    // ---【InitialValues】---
    const initialValues = {
        home_care_clinic_id: 0,
        examination_clinic_id: 0,
        login_name: '',
        password: '',
        last_name: '',
        first_name: '',
        authority: '',
        email_address: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    // ---【Validate】---
    const validate = {
        login_name: isNotEmpty(isNotEmptyErrorMessage),
        password: isNotEmpty(isNotEmptyErrorMessage),
        last_name: isNotEmpty(isNotEmptyErrorMessage),
        first_name: isNotEmpty(isNotEmptyErrorMessage),
        authority: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'login_name',
            component: 'TextInput',
            props: {
                label: 'ログイン名',
                maxLength: 10,
                withAsterisk: true,
            },
        },
        {
            formPath: 'password',
            component: 'TextInput',
            props: {
                label: 'パスワード',
                maxLength: 10,
                withAsterisk: true,
            },
        },
        {
            formPath: 'last_name',
            component: 'TextInput',
            props: {
                label: '姓',
                withAsterisk: true,
            },
        },
        {
            formPath: 'first_name',
            component: 'TextInput',
            props: {
                label: '名',
                withAsterisk: true,
            },
        },
        {
            formPath: 'authority',
            component: 'Select',
            props: {
                label: '権限',
                data: ['管理者', '検査依頼', '検査予約', '送迎'],
                withAsterisk: true,
            },
        },
        {
            formPath: 'email_address',
            component: 'TextInput',
            props: {
                label: 'メールアドレス',
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
