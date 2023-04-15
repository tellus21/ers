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
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
    ]

    // ---【FormValues】---
    type FormValues = Omit<HomeCareDoctor, 'id'>

    // ---【InitialValues】---
    const initialValues = {
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
    const form = useForm<FormValues>({
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
