import {
    isNotEmptyErrorMessage,
    karteNumberLengthErrorMessage,
} from '@/common/constants'
import { useQueryBase } from '@/common/hooks'
import { Fields } from '@/common/types'
import { hasLength, isNotEmpty, useForm } from '@mantine/form'

export function useReservationInformation() {
    // ---【Name】---
    const logicalName = '予約情報'
    const physicalName = 'reservationInformation'
    const resource = 'reservation_informations'

    // ---【API】---
    // physicalNameでデータ取れるようにしたほうがいいかも
    const { data: query } = useQueryBase(resource)

    // ---【Type】---
    interface ReservationInformation {
        described_date: string
        described_person: string
        home_clinic_karte_number: string
        exam_clinic_karte_number: string
        facility_manager: string
        drop_off_and_pick_up_time: string
        plan_fixed_date: string
        pick_up_time: string
        start_time: string
        return_home_time: string
        attendant_person: string
        drive_person: string
        pick_up_person: string
        sender: string
        outgoing_date: string
        submission_number: string
        current_day_notice: string
    }

    // ---【Form】---
    // TODO:created_atなどを作ったあとに、それらを抜く
    type FormValues = ReservationInformation
    //  type ReservationInformationFormValues = Omit<ReservationInformation, 'id'>

    // Formの初期値とバリデーションチェック
    const initialValues = {
        id: '0',
        described_date: '',
        described_person: '',
        home_clinic_karte_number: '',
        exam_clinic_karte_number: '',
        facility_manager: '',
        drop_off_and_pick_up_time: '',
        plan_fixed_date: '',
        pick_up_time: '',
        start_time: '',
        return_home_time: '',
        attendant_person: '',
        drive_person: '',
        pick_up_person: '',
        sender: '',
        outgoing_date: '',
        submission_number: '',
        current_day_notice: '',
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

    // ---【Fields】---
    const fields = {
        metaData: [
            {
                formPath: 'pick_up_time_list',
                component: 'PickUpTimeList',
                props: {
                    label: '送迎時間一覧',
                    data: [
                        { name: 'ひがし', time: '10分' },
                        { name: 'スマイル', time: '20分' },
                        { name: 'ことに', time: '' },
                        { name: 'きた', time: '100分' },
                        { name: 'きた高速', time: '10分' },
                    ],
                },
            },

            {
                formPath: 'described_date',
                component: 'TextInput',
                props: {
                    label: '記載日',
                    withAsterisk: true,
                },
            },
            {
                formPath: 'described_person',
                component: 'TextInput',
                props: {
                    label: '記載者',
                    withAsterisk: true,
                },
            },
        ],

        examination: [
            {
                formPath: 'plan_fixed',
                component: 'TextInput',
                props: {
                    label: '在宅クリニックカルテ番号',
                    withAsterisk: true,
                },
            },
            {
                formPath: 'plan_fixed',
                component: 'TextInput',
                props: {
                    label: '検査クリニックカルテ番号',
                    withAsterisk: true,
                },
            },
        ],

        pickUp: [
            {
                formPath: 'facility_manager',
                component: 'TextInput',
                props: {
                    label: '施設担当者',
                    withAsterisk: true,
                },
            },
            {
                formPath: 'plan_fixed_date',
                component: 'DatePickerInput',
                props: {
                    label: '予定確定日',
                    withAsterisk: true,
                },
            },
            // 文字列でよいかも。それかinitがstringならよいのか
            // TimeInputエラーでるけど使い続けるか
            {
                formPath: 'time1',
                component: 'TimeInput',
                props: {
                    label: '迎え時間',
                },
            },
            {
                formPath: 'time2',
                component: 'TimeInput',
                props: {
                    label: '開始時間',
                },
            },
            {
                formPath: 'time3',
                component: 'TimeInput',
                props: {
                    label: '帰宅時間',
                },
            },
            {
                component: 'Blank',
            },
            {
                formPath: 'time',
                component: 'TextInput',
                props: {
                    label: '付添者',
                    withAsterisk: true,
                },
            },
            {
                formPath: 'pick_up_person',
                component: 'TextInput',
                props: {
                    label: '送者',
                    withAsterisk: true,
                },
            },
            {
                formPath: 'pick_up_person',
                component: 'TextInput',
                props: {
                    label: '迎者',
                    withAsterisk: true,
                },
            },
        ],

        fax: [
            {
                formPath: 'sender',
                component: 'TextInput',
                props: {
                    label: '発信者',
                    withAsterisk: true,
                },
            },
            {
                formPath: 'outgoing_date',
                component: 'DatePickerInput',
                props: {
                    label: '発信日',
                },
            },
            {
                formPath: 'submission_number',
                component: 'NumberInput',
                props: {
                    label: '送付枚数',
                    max: 10,
                    min: 0,
                    withAsterisk: true,
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
                formPath: 'described_person',
                component: 'Textarea',
                props: {
                    label: '当日特記事項',
                    withAsterisk: true,
                },
            },
        ],
    }

    return {
        logicalName,
        physicalName,
        resource,
        query,
        form,
        fields,
    }
}
