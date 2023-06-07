import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks/NormalMutate'
import { Field } from '@/common/types'
import { isNotEmpty, useForm } from '@mantine/form'
import { useHomeCareClinicFeature } from '../home-care-clinics/homeCareClinicFeature'
import { useExaminationClinicFeature } from '../examination-clinics/examinationClinicFeature'
import { findIdByName } from '@/common/lib'

// ---【Types】---
export interface User {
    id: number
    home_care_clinic_id: number | null
    examination_clinic_id: number | null
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

// ---【FormValues】---
export interface UserFormValues extends User {
    home_care_clinic: { name: string }
    examination_clinic: { name: string }
}

// ---【InitialValues】---
export const initialValues: UserFormValues = {
    id: 0,
    home_care_clinic_id: null, //nullの場合もあるので
    examination_clinic_id: null, //nullの場合もあるので
    login_name: '',
    password: '',
    last_name: '',
    first_name: '',
    authority: '',
    email_address: '',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    home_care_clinic: { name: '' },
    examination_clinic: { name: '' },
}

// ---【Feature】---
export function useUserFeature() {
    const { query: homeCareClinics, homeCareClinicNames } =
        useHomeCareClinicFeature()
    const { query: examinationClinics, examinationClinicNames } =
        useExaminationClinicFeature()

    // ---【Name】---
    const logicalName = 'ユーザ'
    const resource = 'users'

    // ---【Validate】---
    const validate = {
        login_name: isNotEmpty(isNotEmptyErrorMessage),
        password: isNotEmpty(isNotEmptyErrorMessage),
        last_name: isNotEmpty(isNotEmptyErrorMessage),
        first_name: isNotEmpty(isNotEmptyErrorMessage),
        authority: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【TransFormValues】---
    const transformValues = (values: any): UserFormValues => ({
        ...values,
        home_care_clinic_id: findIdByName(
            homeCareClinics,
            values.home_care_clinic.name
        ),
        examination_clinic_id: findIdByName(
            examinationClinics,
            values.examination_clinic.name
        ),
    })

    // ---【Form】---
    const form = useForm<UserFormValues>({
        initialValues: initialValues,
        validate: validate,
        transformValues: transformValues,
    })

    // ---【DataTable】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'home_care_clinic.name', title: '在宅クリニック' },
        { accessor: 'examination_clinic.name', title: '検査クリニック' },
        { accessor: 'login_name', title: 'ログイン名' },
        { accessor: 'last_name', title: '姓' },
        { accessor: 'first_name', title: '名' },
        { accessor: 'authority', title: '権限' },
        { accessor: 'email_address', title: 'メールアドレス' },
    ]

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'home_care_clinic.name',
            component: 'Select',
            props: {
                data: homeCareClinicNames,
                label: '在宅クリニック',
            },
        },
        {
            formPath: 'examination_clinic.name',
            component: 'Select',
            props: {
                data: examinationClinicNames,
                label: '検査クリニック',
            },
        },
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

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Return】 ---
    return {
        logicalName,
        resource,
        columns,
        form,
        fields,
        query,
    }
}
