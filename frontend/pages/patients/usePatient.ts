import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'

export function usePatient() {
    // ---【Name】---
    const logicalName = '患者'
    const physicalName = 'patient'
    const resource = 'patients'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface Patient {
        id: string
        home_clinic: string
        primary_doctor: string
        karte_number_home: string
        karte_number_exam: string
        family_name_furigana: string
        first_name_furigana: string
        family_name: string
        first_name: string
        birthdate: string
        gender: string
        nursing_home: string
        phone_number: string
        postal_code: string
        address: string
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
    type FormValues = Patient
    //  type PatientFormValues = Omit<Patient, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        home_clinic: '',
        primary_doctor: '',
        karte_number_home: '',
        karte_number_exam: '',
        family_name_furigana: '',
        first_name_furigana: '',
        family_name: '',
        first_name: '',
        birthdate: '',
        gender: '',
        nursing_home: '',
        phone_number: '',
        postal_code: '',
        address: '',
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
            component: 'Select',
            props: {
                data: ['test', 'test2'],
                label: '在宅クリニック',
                withAsterisk: true,
            },
            formPath: 'home_clinic',
        },
        {
            component: 'Select',
            props: {
                data: ['testaaaa', 'testbbbb'],
                label: '主治医',
                withAsterisk: true,
            },
            formPath: 'primary_doctor',
        },
        {
            component: 'TextInput',
            props: {
                label: 'カルテ番号(在宅)',
                maxLength: 6,
                withAsterisk: true,
            },
            formPath: 'karte_number_home',
        },
        {
            component: 'TextInput',
            props: {
                label: 'カルテ番号(検査)',
                maxLength: 6,
                withAsterisk: true,
            },
            formPath: 'karte_number_exam',
        },
        {
            component: 'TextInput',
            props: {
                label: '姓(フリガナ)',
                withAsterisk: true,
            },
            formPath: 'family_name_furigana',
        },
        {
            component: 'TextInput',
            props: {
                label: '名(フリガナ)',
                withAsterisk: true,
            },
            formPath: 'first_name_furigana',
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
            component: 'DateInput',
            props: {
                label: '生年月日',
                withAsterisk: true,
            },
            formPath: 'birthdate',
        },
        {
            component: 'Select',
            props: {
                data: ['testaaaa', 'testbbbb'],
                label: '性別',
                withAsterisk: true,
            },
            formPath: 'gender',
        },
        {
            component: 'TextInput',
            props: {
                label: '入居施設',
                withAsterisk: true,
            },
            formPath: 'nursing_home',
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
                label: '郵便番号',
                maxLength: 10,
                withAsterisk: true,
            },
            formPath: 'postal_code',
        },
        {
            component: 'TextInputLong',
            props: {
                label: '住所',
                withAsterisk: true,
            },
            formPath: 'address',
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
