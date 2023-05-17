import { isNotEmpty, useForm } from '@mantine/form'
import { genderOptions, isNotEmptyErrorMessage } from '@/common/constants'
import { findIdByName, getNames } from '@/common/lib'
import { Field } from '@/common/types'
import { useQueryBase } from '@/common/hooks'
import { useHomeCareClinicFeature } from '../home-care-clinics/homeCareClinicFeature'
import { useHomeCareDoctorFeature } from '../home-care-doctors/homeCareDoctorFeature'
import { useNursingHomeFeature } from '../nursing-homes/nursingHomeFeature'
import dayjs from 'dayjs'

// ---【Types】---
export interface Patient {
    id: number
    home_care_clinic_id: number
    home_care_doctor_id: number
    nursing_home_id: number
    karte_number_home: string
    last_name_kana: string
    first_name_kana: string
    last_name: string
    first_name: string
    birthday: Date | null
    gender: string
    karte_number_lsi: string
    karte_number_smile: string
    karte_number_kotoni: string
    karte_number_kita: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface PatientFormValues extends Patient {
    home_care_clinic: { name: string }
    home_care_doctor: { name: string }
    nursing_home: { name: string }
}

// ---【InitialValues】---
export const patientInitialValues: PatientFormValues = {
    id: 0,
    home_care_clinic_id: 0,
    home_care_doctor_id: 0,
    nursing_home_id: 0,
    karte_number_home: '',
    last_name_kana: '',
    first_name_kana: '',
    last_name: '',
    first_name: '',
    birthday: new Date(1850, 0, 1), //この辺が生年月日の患者が多そうだと推測
    gender: '',
    karte_number_lsi: '',
    karte_number_smile: '',
    karte_number_kotoni: '',
    karte_number_kita: '',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
    home_care_clinic: { name: '' },
    home_care_doctor: { name: '' },
    nursing_home: { name: '' },
}

// ---【Feature】---
export function usePatientFeature() {
    // ---【Query】---
    const { query: homeCareClinics, homeCareClinicNames } =
        useHomeCareClinicFeature()
    const { query: homeCareDoctors, homeCareDoctorNames } =
        useHomeCareDoctorFeature()
    const { query: nursingHomes, nursingHomeNames } = useNursingHomeFeature()

    // ---【Name】---
    const logicalName = '患者'
    const resource = 'patients'

    // ---【Validate】---
    const validate = {
        home_care_clinic_id: isNotEmpty(isNotEmptyErrorMessage),
        nursing_home_id: isNotEmpty(isNotEmptyErrorMessage),
        last_name_kana: isNotEmpty(isNotEmptyErrorMessage),
        first_name_kana: isNotEmpty(isNotEmptyErrorMessage),
        last_name: isNotEmpty(isNotEmptyErrorMessage),
        first_name: isNotEmpty(isNotEmptyErrorMessage),
        birthday: isNotEmpty(isNotEmptyErrorMessage),
        gender: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【TransFormValues】---
    const transformValues = (values: any): PatientFormValues => ({
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
    const form = useForm<PatientFormValues>({
        initialValues: patientInitialValues,
        validate: validate,
        transformValues: transformValues,
    })

    // ---【DataTable】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'home_care_clinic.name', title: '在宅クリニック' },
        { accessor: 'home_care_doctor.name', title: '主治医' },
        { accessor: 'karte_number_home', title: 'カルテ番号(在宅)' },
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
        { accessor: 'karte_number_lsi', title: 'カルテ(LSI)' },
        { accessor: 'karte_number_smile', title: 'カルテ(スマイル)' },
        { accessor: 'karte_number_kotoni', title: 'カルテ(ことに)' },
        { accessor: 'karte_number_kita', title: 'カルテ(きた)' },
    ]

    // ---【Fields】---
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
            formPath: 'karte_number_home',
            component: 'TextInput',
            props: {
                label: 'カルテ番号(在宅)',
                maxLength: 6,
            },
        },
        {
            component: 'BlankLong',
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
        {
            component: 'Blank',
        },
        {
            formPath: 'karte_number_lsi',
            component: 'TextInput',
            props: {
                label: 'カルテ番号(LSI)',
                maxLength: 6,
            },
        },
        {
            formPath: 'karte_number_smile',
            component: 'TextInput',
            props: {
                label: 'カルテ番号(スマイル)',
                maxLength: 6,
            },
        },
        {
            formPath: 'karte_number_kotoni',
            component: 'TextInput',
            props: {
                label: 'カルテ番号(ことに)',
                maxLength: 6,
            },
        },
        {
            formPath: 'karte_number_kita',
            component: 'TextInput',
            props: {
                label: 'カルテ番号(きた)',
                maxLength: 6,
            },
        },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)
    const patientNames = getNames(query)

    return {
        logicalName,
        resource,
        columns,
        form,
        fields,
        query,
        patientNames,
    }
}
