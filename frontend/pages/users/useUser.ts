import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'

export function useUser() {
    // ---【Name】---
    const logicalName = 'ユーザ'
    const physicalName = 'user'
    const resource = 'users'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface User {
        id: string
        login_id: string
        password: string
        family_name: string
        first_name: string
        department: string
        authority: string
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
    type FormValues = User
    //  type UserFormValues = Omit<User, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        login_id: '',
        password: '',
        family_name: '',
        first_name: '',
        department: '',
        authority: '',
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
                label: 'ログインID',
                maxLength: 10,
                withAsterisk: true,
            },
            formPath: 'login_id',
        },
        {
            component: 'TextInput',
            props: {
                label: 'パスワード',
                maxLength: 10,
                withAsterisk: true,
            },
            formPath: 'password',
        },
        {
            component: 'TextInput',
            props: {
                label: '姓',
                withAsterisk: true,
            },
            formPath: 'family_name',
        },
        {
            component: 'TextInput',
            props: {
                label: '名',
                withAsterisk: true,
            },
            formPath: 'first_name',
        },
        {
            component: 'Select',
            props: {
                label: '所属',
                data: [
                    '',
                    'ことに在宅',
                    'ひがし在宅',
                    'スマイル在宅',
                    'きた在宅',
                    'LSI札幌クリニック',
                    'スマイル健康クリニック',
                ],
                withAsterisk: true,
            },
            formPath: 'department',
        },
        {
            component: 'Select',
            props: {
                label: '権限',
                data: ['', '管理者', '検査依頼', '検査予約', '送迎'],
                withAsterisk: true,
            },
            formPath: 'authority',
        },
        {
            component: 'BlankLong',
        },
        {
            component: 'BlankLong',
        },
        {
            component: 'BlankLong',
        },
        {
            component: 'BlankLong',
        },
        {
            component: 'BlankLong',
        },
        {
            component: 'BlankLong',
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
