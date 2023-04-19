import { isNotEmpty, useForm } from '@mantine/form'
import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Field } from '@/common/types'
import { getNames } from '@/common/lib'

export interface HomeCareClinic {
    id: number
    name: string
    abbreviation: string
    postal_code: string
    address: string
    phone_number: string
    fax_number: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

export const useHomeCareClinicNames = () => {
    const { data: homeCareClinics } = useQueryBase('home_care_clinics')
    const homeCareClinicNames = getNames(homeCareClinics)
    return homeCareClinicNames
}

export function useHomeCareClinicFeature() {
    // ---【Name】---
    const logicalName = '在宅クリニック'
    const resource = 'home_care_clinics'

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【InitialValues】---
    const initialValues = {
        id: 0,
        name: '',
        abbreviation: '',
        postal_code: '',
        address: '',
        phone_number: '',
        fax_number: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    // ---【Validate】---
    const validate = {
        name: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<HomeCareClinic>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【DataTable】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
    ]

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'name',
            component: 'TextInput',
            props: {
                label: '在宅クリニック名',
                withAsterisk: true,
            },
        },
        {
            formPath: 'abbreviation',
            component: 'TextInput',
            props: {
                label: '略称',
            },
        },
        {
            formPath: 'postal_code',
            component: 'TextInput',
            props: {
                label: '郵便番号',
            },
        },
        {
            formPath: 'address',
            component: 'TextInput',
            props: {
                label: '住所',
                maxLength: 100,
            },
        },
        {
            formPath: 'phone_number',
            component: 'TextInput',
            props: {
                label: '電話番号',
                maxLength: 13,
            },
        },
        {
            formPath: 'fax_number',
            component: 'TextInput',
            props: {
                label: 'FAX番号',
                maxLength: 13,
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
