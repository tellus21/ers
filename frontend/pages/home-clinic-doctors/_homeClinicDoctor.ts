import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { keyframes } from '@emotion/react'
import { isNotEmpty } from '@mantine/form'
import { useEffect, useState } from 'react'
import { HomeClinic } from '../home-clinics/useHomeClinic'
import { useHomeClinics } from '../home-clinics/_useHomeClinics'

// ---【resourceの基本type】---
// モデルをそのまま記載
export interface HomeClinicDoctor {
    id: string
    home_clinic_id: string
    // home_clinic_name: string
    name: string
}

// ---【DataTable関連】---
// DataTableのカラム
export const homeClinicDoctorColumns = [
    { accessor: 'home_clinic.name', title: '在宅クリニック名' },
    { accessor: 'name', title: '名前' },
]

// ---【Form関連】---
// TODO:created_atなどを作ったあとに、それらを抜く
// export type HomeClinicDoctorFormValues = HomeClinicDoctor
export type HomeClinicDoctorFormValues = Omit<HomeClinicDoctor, 'id'>

// Formの初期値とバリデーションチェック
export const homeClinicDoctorInitialValues = {
    id: '0',
    home_clinic_id: '',
    name: '',
}

export const homeClinicDoctorValidate = {
    // home_clinic_id: isNotEmpty(isNotEmptyErrorMessage),
    // name: isNotEmpty(isNotEmptyErrorMessage),
}

export const useHomeClinicDoctorTransFormValues = {}

// FormのFields
// TODO:Blankたくさんのなにか方法ないか考える　※これをいれないとSelectしたときに途切れる
export const useHomeClinicDoctorFields = (): Fields[] => {
    const { homeClinicsQuery } = useHomeClinics()
    const homeClinicsNames = homeClinicsQuery?.home_clinics.map(
        (home_clinic: HomeClinic) => home_clinic.name
    )

    return [
        {
            component: 'Select',
            props: {
                label: '在宅クリニック名',
                data: homeClinicsNames, //サンプル
                // data: ['aa', 'bb'],
                withAsterisk: true,
            },
            formPath: 'home_clinic_name',
        },
        {
            component: 'TextInput',
            props: {
                label: '医師名',
                withAsterisk: true,
            },
            formPath: 'name',
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
}
