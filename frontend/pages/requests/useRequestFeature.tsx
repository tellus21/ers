import { useQueryBase } from '@/common/hooks'
import { useForm } from '@mantine/form'

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
export interface RequestFormValues extends Request {}

// ---【Feature】---
export function useRequestFeature() {
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
    }

    // ---【Validate】---
    const validate = {}

    // ---【Form】---
    const form = useForm<RequestFormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Table】---
    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
    ]

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    // ---【Return】---
    return {
        logicalName,
        resource,
        columns,
        form,
        query,
    }
}
