import { isNotEmpty, useForm } from '@mantine/form'
import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Field } from '@/common/types'
import { getNames } from '@/common/lib'

// ---【Types】---
export interface HomeCareDoctor {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface HomeCareDoctorFormValues extends HomeCareDoctor {}

// ---【Feature】---
export function useHomeCareDoctorFeature() {
    // ---【Name】---
    const logicalName = '在宅医師'
    const resource = 'home_care_doctors'

    // ---【InitialValues】---
    const initialValues: HomeCareDoctorFormValues = {
        id: 0,
        name: '',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    // ---【Validate】---
    const validate = {
        name: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<HomeCareDoctorFormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【DataTable】---
    const columns = [
        { accessor: 'id', title: 'id', width: 50, textAlignment: 'center' },
        { accessor: 'name', title: '名前', textaligment: 'center' },
    ]

    // ---【Fields】---
    const fields: Field[] = [
        {
            formPath: 'name',
            component: 'TextInput',
            props: {
                label: '名前',
                withAsterisk: true,
            },
        },
        {
            component: 'Blank',
        },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)
    const homeCareDoctorNames = getNames(query)

    // ---【Return】 ---
    return {
        logicalName,
        resource,
        columns,
        form,
        fields,
        query,
        homeCareDoctorNames,
    }
}
