import { isNotEmpty, useForm } from '@mantine/form'
import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks/NormalMutate'
import { Field } from '@/common/types'
import { getNames } from '@/common/lib'

// ---【Types】---
export interface HomeCareDoctor {
    id: number
    name: string
    is_retired: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface HomeCareDoctorFormValues extends HomeCareDoctor {}

// ---【InitialValues】---
export const homeCareDoctorInitialValues: HomeCareDoctorFormValues = {
    id: 0,
    name: '',
    is_retired: false,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
}

// ---【Feature】---
export function useHomeCareDoctorFeature() {
    // ---【Name】---
    const logicalName = '在宅医師'
    const resource = 'home_care_doctors'

    // ---【Validate】---
    const validate = {
        name: isNotEmpty(isNotEmptyErrorMessage),
    }

    // ---【Form】---
    const form = useForm<HomeCareDoctorFormValues>({
        initialValues: homeCareDoctorInitialValues,
        validate: validate,
    })

    // ---【DataTable】---
    const columns = [
        {
            accessor: 'id',
            title: 'id',
            width: 50,
            textAlignment: 'center',
            sortable: true,
        },
        {
            accessor: 'name',
            title: '名前',
            textaligment: 'center',
            sortable: true,
        },
        {
            accessor: 'is_retired',
            title: '退職済',
            textaligment: 'center',
            render: (row: HomeCareDoctor) => (row.is_retired ? '○' : '×'),
            sortable: true,
        },
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
            formPath: 'is_retired',
            component: 'Checkbox',
            props: {
                label: '退職済',
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
