import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'

export function useExam() {
    // ---【Name】---
    const logicalName = '検査'
    const physicalName = 'exam'
    const feature = 'exams'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(feature)

    // ---【Type】---
    interface Exam {
        id: string
        exam_clinic_id: string
        home_clinic_id: string
        home_clinic_doctor_id: string
        patient_id: string
        patient_status_id: string
        insurance_id: string
        direction_request_id: string
        direction_reservation_id: string
        reservation_information_id: string
    }

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
    type FormValues = Exam
    //  type ExamFormValues = Omit<Exam, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        exam_clinic_id: '0',
        home_clinic_id: '0',
        home_clinic_doctor_id: '0',
        patient_id: '0',
        patient_status_id: '0',
        insurance_id: '0',
        direction_request_id: '0',
        direction_reservation_id: '0',
        reservation_information_id: '0',
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
        query,
        columns,
        form,
    }
}
