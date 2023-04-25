import { useQueryBase } from '@/common/hooks'
import { Field } from '@/common/types'
import { useForm } from '@mantine/form'
import { usePatientFeature } from '../patients/patientFeature'
import { findIdByName } from '@/common/lib'

// ---【Type】---
export interface Request {
    id: number
    user_id: number | null
    patient_id: number | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface RequestFormValues extends Request {
    patient: { name: string }
}

// ---【Feature】---
export function useRequestFeature() {
    const { query: patients, patientNames } = usePatientFeature()

    // ---【Name】---
    const logicalName = '検査依頼'
    const resource = 'requests'

    // ---【InitialValues】---
    const initialValues: RequestFormValues = {
        id: 0,
        user_id: null, //初回のpost時は、ログイン者のIDがはいるので、initialはnull
        patient_id: null, //初回のpost時は、患者IDが決まってないので、initialはnull
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
        patient: { name: '' },
    }

    // ---【Validate】---
    const validate = {}

    // ---【TransFormValues】---
    const transformValues = (values: any): RequestFormValues => ({
        ...values,
        patient_id: findIdByName(patients, values.patient.name),
    })

    // ---【Form】---
    const form = useForm<RequestFormValues>({
        initialValues: initialValues,
        validate: validate,
        transformValues: transformValues,
    })

    // ---【Table】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: '', title: '進捗ステータス' },
        { accessor: 'user.name', title: '作成者' },
        { accessor: 'patient.home_care_clinic', title: '患者施設' },
        { accessor: 'patient.name', title: '対象患者名' },
    ]

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'patient.name',
            component: 'SearchableSelect',
            props: {
                data: patientNames,
                label: '患者名',
                withAsterisk: true,
            },
        },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Return】---
    return {
        logicalName,
        resource,
        columns,
        form,
        fields,
        query,
    }
}
