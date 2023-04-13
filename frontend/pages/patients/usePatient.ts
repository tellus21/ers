import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Field,  } from '@/common/types'
import { isNotEmpty, useForm } from '@mantine/form'

export function usePatients():  {
    // ---【Name】---
    const logicalName = '患者'
    const physicalName = 'patient'
    const resource = 'patients'

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface Patient {
        id: number
        home_care_clinic_id: number
        home_care_doctor_id: number
        nursing_home_id: number
        home_karte_number: string
        exam_karte_number: string
        last_name_kana: string
        first_name_kana: string
        last_name: string
        first_name: string
        birthday: string
        gender: string
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
    type FormValues = Omit<Patient, 'id'>

    // ---【InitialValues】---
    const initialValues = {
        home_care_clinic_id: 0,
        home_care_doctor_id: 0,
        nursing_home_id: 0,
        home_karte_number: '',
        exam_karte_number: '',
        last_name_kana: '',
        first_name_kana: '',
        last_name: '',
        first_name: '',
        birthday: '',
        gender: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    // ---【Validate】---
    const validate = {
        home_care_clinic_id: isNotEmpty(isNotEmptyErrorMessage),
        home_karte_number: isNotEmpty(isNotEmptyErrorMessage),
        nursing_home_id: isNotEmpty(isNotEmptyErrorMessage),
        last_name_kana: isNotEmpty(isNotEmptyErrorMessage),
        first_name_kana: isNotEmpty(isNotEmptyErrorMessage),
        last_name: isNotEmpty(isNotEmptyErrorMessage),
        first_name: isNotEmpty(isNotEmptyErrorMessage),
        birthday: isNotEmpty(isNotEmptyErrorMessage),
        gender: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'home_care_clinic.name',
            component: 'Select',
            props: {
                data: ['test', 'test2'],
                label: '在宅クリニック',
                withAsterisk: true,
            },
        },
        {
            formPath: 'home_care_doctor.name',
            component: 'Select',
            props: {
                data: ['testaaaa', 'testbbbb'],
                label: '主治医',
            },
        },
        {
            formPath: 'home_karte_number',
            component: 'TextInput',
            props: {
                label: 'カルテ番号(在宅)',
                maxLength: 6,
            },
        },
        {
            formPath: 'exam_karte_number',
            component: 'TextInput',
            props: {
                label: 'カルテ番号(検査)',
                maxLength: 6,
            },
        },
        {
            formPath: 'last_name_kana',
            component: 'TextInput',
            props: {
                label: '姓(フリガナ)',
                withAsterisk: true,
            },
        },
        {
            formPath: 'first_name_kana',
            component: 'TextInput',
            props: {
                label: '名(フリガナ)',
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
            formPath: 'birthday',
            component: 'DateInput',
            props: {
                label: '生年月日',
                withAsterisk: true,
            },
        },
        {
            formPath: 'gender',
            component: 'Select',
            props: {
                data: ['testaaaa', 'testbbbb'],
                label: '性別',
                withAsterisk: true,
            },
        },
        {
            formPath: 'nursing_home.name',
            component: 'TextInput',
            props: {
                label: '入居施設',
                withAsterisk: true,
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
