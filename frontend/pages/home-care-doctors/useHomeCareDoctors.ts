import { isNotEmpty, useForm } from '@mantine/form'
import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Field } from '@/common/types'

export function useHomeCareDoctors() {
    // ---【Name】---
    const logicalName = '在宅医師'
    const physicalName = 'home_care_doctors'
    const resource = 'home_care_doctors'

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface HomeCareDoctor {
        id: number
        name: string
        created_at: Date
        updated_at: Date
        deleted_at: Date | null
    }

    // ---【DataTable】---
    const columns = [
        { accessor: 'id', title: 'id', width: 50, textAlignment: 'center' },
        { accessor: 'name', title: '名前', textaligment: 'center' },
    ]

    // ---【FormValues】---
    type FormValues = Omit<HomeCareDoctor, 'id'>

    // ---【InitialValues】---
    const initialValues = {
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
    const form = useForm<HomeCareDoctor>({
        initialValues: initialValues,
        validate: validate,
    })

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
