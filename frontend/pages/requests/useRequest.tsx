import { useQueryBase } from '@/common/hooks'
import { UseObject } from '@/common/types'
import { useForm } from '@mantine/form'

export function useRequest(): UseObject {
    // ---【Name】---
    const logicalName = '検査依頼'
    const physicalName = 'request'
    const resource = 'requests'

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface Request {
        id: number
        user_id: number
        patient_id: number
        created_at: Date
        updated_at: Date
        deleted_at: Date | null
    }

    //検討中
    // ---【Table】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
    ]

    // ---【FormValues】---
    type FormValues = Omit<Request, 'id'>

    // ---【InitialValues】---
    const initialValues: FormValues = {
        user_id: 0,
        patient_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    }

    // ---【Validate】---
    const validate = {}

    // ---【Form】---
    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Return】---
    return {
        logicalName,
        physicalName,
        resource,
        query,
        columns,
        form,
    }
}
