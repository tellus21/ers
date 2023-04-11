import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'
import { useHomeClinic } from '../home-clinics/useHomeClinic'

export function useHomeClinicDoctor() {
    // ---【Name】---
    const logicalName = '在宅医師'
    const physicalName = 'home_clinic_doctor'
    const resource = 'home_clinic_doctors'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface HomeClinicDoctor {
        id: string
        home_clinic_id: string
        // home_clinic_name: string
        name: string
    }

    // ---【DataTable】---
    // DataTableのカラム
    const columns = [
        { accessor: 'home_clinic.name', title: '在宅クリニック名' },
        { accessor: 'name', title: '名前' },
    ]

    // ---【Form】---
    // TODO:created_atなどを作ったあとに、それらを抜く
    type FormValues = HomeClinicDoctor
    //  type HomeClinicDoctorFormValues = Omit<HomeClinicDoctor, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        home_clinic_id: '',
        name: '',
    }

    const validate = {
        name: isNotEmpty(isNotEmptyErrorMessage),
        abbreviation: isNotEmpty(isNotEmptyErrorMessage),
        postal_code: isNotEmpty(isNotEmptyErrorMessage),
        address: isNotEmpty(isNotEmptyErrorMessage),
        phone_number: isNotEmpty(isNotEmptyErrorMessage),
        fax_number: isNotEmpty(isNotEmptyErrorMessage),
    }

    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    const { query: homeClinicsQuery } = useHomeClinic()
    const homeClinicNames = homeClinicsQuery?.home_clinics.map(
        (home_clinic: any) => home_clinic.name
    )

    // ---【Fields】---
    const fields: Fields[] = [
        {
            component: 'Select',
            props: {
                label: '在宅クリニック名',
                data: homeClinicNames, //サンプル
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
