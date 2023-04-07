import { hasLength, isNotEmpty, useForm } from '@mantine/form'
import { ctFields, metaDataFields, mriFields } from './fields'
import { ctContrastFields } from './fields/ctContrast'
import { useQueryBase } from '@/common/hooks'

export function useRequest() {
    // ---【Name】---
    const logicalName = '依頼'
    const physicalName = 'request'
    const feature = 'requests'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(feature)

    // ---【Type】---
    interface Request {
        id: string
        // walking_state: string
        // attendant: string
        // pick_up: string
        // is_dementia: boolean
        // is_oxygen: boolean
        // oxygen_quantity: string
        // is_allergy: boolean
        // allergy_detail: string
        // is_infection: boolean
        // test
        ct_request: string[]
        // is_hbs_antigen: boolean
        // is_hcv: boolean
        // is_hiv: boolean
        // is_mrsa: boolean
        // is_body_during_metal: boolean
        // is_alcohol_prohibiting: boolean
        // is_pace_maker: boolean
        // day_weekday: string
        // medical_care_date: string
        // surgery_medical_history: string
        // other: string
        // anything_memo: string
    }

    // ---【DataTable関連】---
    // DataTableのカラム

    const columns = [
        { accessor: 'id', title: 'id' },
        { accessor: 'name', title: '名前', width: 150 },
        { accessor: 'postal_code', title: '郵便番号' },
        { accessor: 'address', title: '住所' },
        { accessor: 'phone_number', title: '電話番号' },
        { accessor: 'fax_number', title: 'FAX番号' },
    ]

    // ---【Form】---
    // TODO:created_atなどを作ったあとに、それらを抜く
    type FormValues = Request
    //  type RequestFormValues = Omit<Request, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        // walking_state: '',
        // attendant: '',
        // pick_up: '',
        // is_dementia: false,
        // is_oxygen: false,
        // oxygen_quantity: '',
        // is_allergy: false,
        // allergy_detail: '',
        // is_infection: false,
        // test
        ct_request: [],
        // other_situations: [],
        // is_hbs_antigen: false,
        // is_hcv: false,
        // is_hiv: false,
        // is_mrsa: false,
        // is_body_during_metal: false,
        // is_alcohol_prohibiting: false,
        // is_pace_maker: false,
        // day_weekday: '',
        // medical_care_date: '',
        // surgery_medical_history: '',
        // other: '',
        // anything_memo: '',
    }

    const validate = {
        // request_id: isNotEmpty(isNotEmptyErrorMessage),
        // walking_state: isNotEmpty(isNotEmptyErrorMessage),
        // dementia: isNotEmpty(isNotEmptyErrorMessage),
        // oxygen: isNotEmpty(isNotEmptyErrorMessage),
        // allergy: isNotEmpty(isNotEmptyErrorMessage),
        // infection: isNotEmpty(isNotEmptyErrorMessage),
        // other: isNotEmpty(isNotEmptyErrorMessage),
        // notice: isNotEmpty(isNotEmptyErrorMessage),
        // anything_memo: isNotEmpty(isNotEmptyErrorMessage),
    }

    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    return {
        logicalName,
        physicalName,
        feature,
        columns,
        query,
        form,
    }
}
