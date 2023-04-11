import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'

export function useExamClinic() {
    // ---【Name】---
    const logicalName = '検査クリニック'
    const physicalName = 'exam_clinic'
    const resource = 'exam_clinics'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface ExamClinic {
        id: string
        name: string
        abbreviation: string
        postal_code: string
        address: string
        phone_number: string
        fax_number: string
    }

    // ---【DataTable】---
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
    type FormValues = ExamClinic
    //  type ExamClinicFormValues = Omit<ExamClinic, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        name: '',
        abbreviation: '',
        postal_code: '',
        address: '',
        phone_number: '',
        fax_number: '',
    }

    const validate = {
        name: isNotEmpty(isNotEmptyErrorMessage),
        abbreviation: isNotEmpty(isNotEmptyErrorMessage),
        postal_code: isNotEmpty(isNotEmptyErrorMessage),
        address: isNotEmpty(isNotEmptyErrorMessage),
        phone_number: isNotEmpty(isNotEmptyErrorMessage),
        fax_number: isNotEmpty(isNotEmptyErrorMessage),
    }

    const form = useForm<FormValues>({
        initialValues: initialValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields: Fields[] = [
        {
            component: 'TextInput',
            props: {
                label: '検査クリニック名',
                withAsterisk: true,
            },
            formPath: 'name',
        },
        {
            component: 'TextInput',
            props: {
                label: '略称',
                withAsterisk: true,
            },
            formPath: 'abbreviation',
        },
        {
            component: 'TextInput',
            props: {
                label: '郵便番号',
                withAsterisk: true,
            },
            formPath: 'postal_code',
        },
        {
            component: 'TextInput',
            props: {
                label: '住所',
                maxLength: 100,
                withAsterisk: true,
            },
            formPath: 'address',
        },
        {
            component: 'TextInput',
            props: {
                label: '電話番号',
                maxLength: 13,
                withAsterisk: true,
            },
            formPath: 'phone_number',
        },
        {
            component: 'TextInput',
            props: {
                label: 'FAX番号',
                maxLength: 13,
                withAsterisk: true,
            },
            formPath: 'fax_number',
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
