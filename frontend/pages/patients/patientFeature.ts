import { isNotEmpty, useForm } from '@mantine/form'
import { genderOptions, isNotEmptyErrorMessage } from '@/common/constants'
import { findIdByName } from '@/common/lib'
import { Field } from '@/common/types'
import { useQueryBase } from '@/common/hooks'
import { useHomeCareClinicFeature } from '../home-care-clinics/homeCareClinicFeature'
import { useHomeCareDoctorFeature } from '../home-care-doctors/homeCareDoctorFeature'
import { useNursingHomeFeature } from '../nursing-homes/nursingHomeFeature'
import dayjs from 'dayjs'

export interface Patient {
    id: number
    home_care_clinic_id: number
    home_care_doctor_id: number
    nursing_home_id: number
    home_karte_number: string
    last_name_kana: string
    first_name_kana: string
    last_name: string
    first_name: string
    birthday: Date | null
    gender: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

export interface PatientFormValues extends Patient {
    home_care_clinic: { name: string }
    home_care_doctor: { name: string }
    nursing_home: { name: string }
}

export function usePatientFeature() {
    const { query: homeCareClinics, homeCareClinicNames } =
        useHomeCareClinicFeature()
    const { query: homeCareDoctors, homeCareDoctorNames } =
        useHomeCareDoctorFeature()
    const { query: nursingHomes, nursingHomeNames } = useNursingHomeFeature()

    // ---【Name】---
    const logicalName = '患者' // 患者を表す変数
    const resource = 'patients' // APIのリソース名

    // ---【API】---
    // APIから取得したデータをqueryに格納する
    const { data: query } = useQueryBase(resource)

    // ---【InitialValues】---
    // フォームの初期値を定義する
    const initialValues = {
        id: 0,
        home_care_clinic_id: 0,
        home_care_doctor_id: 0,
        nursing_home_id: 0,
        home_karte_number: '',
        last_name_kana: '',
        first_name_kana: '',
        last_name: '',
        first_name: '',
        birthday: new Date(1850, 0, 1),
        gender: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
        home_care_clinic: { name: '' },
        home_care_doctor: { name: '' },
        nursing_home: { name: '' },
    }

    // ---【Validate】---
    // バリデーションルールを定義する
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

    const transformValues = (values: any) => ({
        ...values,
        home_care_clinic_id: findIdByName(
            homeCareClinics,
            values.home_care_clinic.name
        ),
        home_care_doctor_id: findIdByName(
            homeCareDoctors,
            values.home_care_doctor.name
        ),
        nursing_home_id: findIdByName(nursingHomes, values.nursing_home.name),
    })

    // ---【Form】---
    // フォームを定義する
    const form = useForm<PatientFormValues>({
        initialValues: initialValues,
        validate: validate,
        transformValues: transformValues,
    })

    // ---【DataTable】---
    // テーブルのカラムを定義する
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'home_care_clinic.name', title: '在宅クリニック' },
        { accessor: 'home_care_doctor.name', title: '主治医' },
        { accessor: 'home_karte_number', title: 'カルテ番号(在宅)' },
        { accessor: '', title: 'カルテ番号(検査)' },
        { accessor: 'last_name_kana', title: '姓(フリガナ)' },
        { accessor: 'first_name_kana', title: '名(フリガナ)' },
        { accessor: 'last_name', title: '姓' },
        { accessor: 'first_name', title: '名' },
        {
            accessor: 'birthday',
            title: '生年月日',
            render: ({ birthday }: { birthday: Date }) =>
                dayjs(birthday).format('YYYY/MM/DD'),
        },
        { accessor: 'gender', title: '性別' },
        { accessor: 'nursing_home.name', title: '入居施設', width: 150 },
    ]

    // ---【Fields】---
    // フォームのフィールドを定義する

    const fields: Field[] = [
        {
            formPath: 'home_care_clinic.name',
            component: 'Select',
            props: {
                data: homeCareClinicNames,
                label: '在宅クリニック',
                withAsterisk: true,
            },
        },
        {
            formPath: 'home_care_doctor.name',
            component: 'Select',
            props: {
                data: homeCareDoctorNames,
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
        // {
        //     formPath: 'examination_karte_number',
        //     component: 'TextInput',
        //     props: {
        //         label: 'カルテ番号(検査)',
        //         maxLength: 6,
        //     },
        // },
        {
            component: 'Blank',
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
                data: genderOptions,
                label: '性別',
                withAsterisk: true,
            },
        },
        {
            formPath: 'nursing_home.name',
            component: 'Select',
            props: {
                data: nursingHomeNames,
                label: '入居施設',
                withAsterisk: true,
            },
        },
    ]

    return {
        logicalName,
        resource,
        query,
        columns,
        form,
        fields,
    }
}
