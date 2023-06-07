import { isNotEmptyErrorMessage } from '@/common/constants'
import { useQueryBase } from '@/common/hooks/NormalMutate'
import { Field } from '@/common/types'
import { isNotEmpty, useForm } from '@mantine/form'

// ---【Type】---
export interface Appointment {
    id: number
    user_id: number
    instruction_id: number
    home_clinic_karte_number: string
    examination_clinic_karte_number: string
    facility_staff: string
    scheduled_confirmation_date: Date | null
    welcoming_time: string
    start_time: string
    return_home_time: string
    accompanist: string
    sender: string
    receiver: string
    fax_sender: string
    transmission_date: Date | null
    number_of_documents_sent: number
    caution_on_the_day: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
}

// ---【FormValues】---
export interface AppointmentFormValues extends Appointment {}

// ---【InitialValues】---
export const appointmentInitialValues: AppointmentFormValues = {
    id: 0,
    user_id: 0,
    instruction_id: 0,
    home_clinic_karte_number: '',
    examination_clinic_karte_number: '',
    facility_staff: '',
    scheduled_confirmation_date: null,
    welcoming_time: '',
    start_time: '',
    return_home_time: '',
    accompanist: '',
    sender: '',
    receiver: '',
    fax_sender: '',
    transmission_date: null,
    number_of_documents_sent: 0,
    caution_on_the_day: '',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
}

// ---【Feature】---
export function useAppointmentFeature() {
    // ---【Name】---
    const logicalName = '予約情報'
    const resource = 'appointments'

    // ---【Validate】---
    const validate = {
        //うまくいかないinput側で文字数制限かければ不要かも
        // home_clinic_karte_number: (value: string) =>
        //     value.toString.length < 5 ? 'Invalid email' : null,
    }

    // ---【Form】---
    const form = useForm<AppointmentFormValues>({
        initialValues: appointmentInitialValues,
        validate: validate,
    })

    // ---【Fields】---
    const fields: {
        examination: Field[]
        pickUp: Field[]
        fax: Field[]
    } = {
        examination: [
            {
                formPath: 'home_clinic_karte_number',
                component: 'KarteNumberInput',
                props: {
                    label: '在宅クリニックカルテ番号',
                },
            },
            {
                formPath: 'examination_clinic_karte_number',
                component: 'KarteNumberInput',
                props: {
                    label: '検査クリニックカルテ番号',
                },
            },
        ],

        pickUp: [
            {
                formPath: 'facility_staff',
                component: 'TextInput',
                props: {
                    label: '施設担当者',
                },
            },
            {
                formPath: 'scheduled_confirmation_date',
                component: 'DatePickerInput',
                props: {
                    label: '予定確定日',
                },
            },
            {
                formPath: 'welcoming_time',
                component: 'TimeInput',
                props: {
                    label: '迎え時間',
                },
            },
            {
                formPath: 'start_time',
                component: 'TimeInput',
                props: {
                    label: '開始時間',
                },
            },
            {
                formPath: 'return_home_time',
                component: 'TimeInput',
                props: {
                    label: '帰宅時間',
                },
            },
            {
                component: 'Blank',
            },
            {
                formPath: 'accompanist',
                component: 'TextInput',
                props: {
                    label: '付添者',
                },
            },
            {
                formPath: 'sender',
                component: 'TextInput',
                props: {
                    label: '送者',
                },
            },
            {
                formPath: 'receiver',
                component: 'TextInput',
                props: {
                    label: '迎者',
                },
            },
        ],

        fax: [
            {
                formPath: 'fax_sender',
                component: 'TextInput',
                props: {
                    label: '発信者',
                },
            },
            {
                formPath: 'transmission_date',
                component: 'DatePickerInput',
                props: {
                    label: '発信日',
                },
            },
            {
                formPath: 'number_of_documents_sent',
                component: 'NumberInput',
                props: {
                    label: '送付枚数',
                    max: 10,
                    min: 0,
                },
            },
            {
                component: 'Blank',
            },
            {
                component: 'Blank',
            },
            {
                component: 'Blank',
            },
            {
                formPath: 'caution_on_the_day',
                component: 'Textarea',
                props: {
                    label: '当日特記事項',
                },
            },
        ],
    }

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    return {
        logicalName,
        resource,
        query,
        form,
        fields,
    }
}
