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
        { accessor: '', title: '進捗ステータス' },
        { accessor: 'user.name', title: '作成者' },
        { accessor: 'patient.home_care_clinic', title: '患者施設' },
        { accessor: 'patient.name', title: '対象患者名' },
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
