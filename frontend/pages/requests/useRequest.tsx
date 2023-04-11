import { useQueryBase } from '@/common/hooks'
import { useForm } from '@mantine/form'

export function useRequest() {
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
        deleted_at: Date
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
    type FormValues = Omit<
        Request,
        'id' | 'created_at' | 'updated_at' | 'deleted_at'
    >

    // ---【InitialValues】---
    const initialValues = {
        id: 0,
        user_id: 0,
        patient_id: 0,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: new Date(),
    }

    // ---【Validation】---
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
