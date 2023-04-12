export function useInstractionFields() {
    const metaData = useMetaData()

    const fields = {
        metaData: metaData,
        ct_1: ct_1,
        ct_2: ct_2,
        ct_3: ct_3,
        mri_1: mri_1,
        mri_2: mri_2,
        mri_3: mri_3,
        mri_4: mri_4,
        us: us,
        spect: spect,
        petCt: petCt,
        etc_1: etc_1,
        etc_2: etc_2,
        text: text,
        contact: contact,
    }

    return {
        fields,
    }
}

const useMetaData = () => {
    return [
        {
            formPath: 'examination_clinic_id',
            component: 'Select',
            props: {
                label: '検査クリニック',
                data: [
                    'LSI札幌クリニック',
                    'きた在宅クリニック',
                    'スマイル健康クリニック',
                ], //サンプル
                // data:examination_clinic.name???
                withAsterisk: true,
            },
        },
        {
            formPath: 'home_care_doctor_id',
            component: 'Select',
            props: {
                label: '指示医師',
                data: ['杉江先生', '深浦先生'], //サンプル
                withAsterisk: true,
            },
        },
        {
            formPath: 'appointment_contant',
            component: 'Select',
            props: {
                data: ['定期', '臨時', '急ぎ', '緊急'],
                label: '予約内容',
                withAsterisk: true,
            },
        },

        {
            formPath: 'candidate_month_1',
            component: 'MonthPickerInput',
            props: {
                label: '候補月_1',
            },
        },
        {
            formPath: 'candidate_month_2',
            component: 'MonthPickerInput',
            props: {
                label: '候補月_2',
            },
        },
    ]
}

const ct_1 = [
    {
        formPath: 'is_ct_contrast',
        component: 'Checkbox',
        props: {
            label: '造影',
        },
    },
]

const ct_2 = [
    {
        formPath: 'has_brain_pelvis',
        component: 'Checkbox',
        props: {
            label: '脳と肺から骨盤まで',
        },
    },
    {
        formPath: 'has_head',
        component: 'Checkbox',
        props: {
            label: '頭',
        },
    },
    {
        formPath: 'has_abdomen',
        component: 'Checkbox',
        props: {
            label: '胸部',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '腹部',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '骨盤部',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '肺から骨盤まで',
        },
    },
]

const ct_3 = [
    {
        component: 'Text',
        props: {
            children: '脊椎（',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '頚',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '胸',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '腰',
        },
    },
    {
        component: 'Text',
        props: {
            children: '）',
        },
    },
    {
        component: 'Text',
        props: {
            children: 'CTA（',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '頭',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '心臓',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '体幹部',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '下肢',
        },
    },
    {
        component: 'Text',
        props: {
            children: '）',
        },
    },

    {
        component: 'Text',
        props: {
            children: 'その他',
        },
    },
    {
        formPath: '',
        component: 'etcTextInput',
        props: {
            label: '',
        },
    },
]

const mri_1 = [
    {
        formPath: 'mri_contrast',
        component: 'Checkbox',
        props: {
            label: '造影',
        },
    },
]
const mri_2 = [
    {
        formPath: 'has_head_mri',
        component: 'Checkbox',
        props: {
            label: '頭',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'VSRAD',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '頭頸部',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '乳腺',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '肝・胆・膵・脾',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'MRCP',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '腎・副腎',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '骨盤部',
        },
    },
]
const mri_3 = [
    {
        component: 'Text',
        props: {
            children: '関節（',
        },
    },
    {
        formPath: 'has_jaw_joint',
        component: 'Checkbox',
        props: {
            label: '顎',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '肩',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '肘',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '手',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '股',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '膝',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '足',
        },
    },
    {
        component: 'Text',
        props: {
            children: ')',
        },
    },
]
const mri_4 = [
    {
        component: 'Text',
        props: {
            children: '脊椎・脊髄（',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '頚',
        },
    },

    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '胸',
        },
    },

    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '腰',
        },
    },
    {
        component: 'Text',
        props: {
            children: ')',
        },
    },
    {
        component: 'Text',
        props: {
            children: 'MRA (',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '頭',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '頚',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '腎',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '下肢',
        },
    },
    {
        component: 'Text',
        props: {
            children: ')',
        },
    },
    {
        component: 'Text',
        props: {
            children: 'その他',
        },
    },
    {
        formPath: '',
        component: 'etcTextInput',
        props: {
            label: '',
        },
    },
]

const us = [
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '甲状腺',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '頸動脈',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '心臓',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '乳腺',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '腹部',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '下肢動脈',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '下肢静脈',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'ABI',
        },
    },
    {
        component: 'Text',
        props: {
            children: 'その他',
        },
    },
    {
        formPath: '',
        component: 'etcTextInput',
        props: {
            label: '',
        },
    },
]

const spect = [
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '脳（ECD）',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '脳（IMP定性）',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '脳（DATscan）',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '甲状腺（Tc）',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '心臓（MIBG）',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'BMIPP',
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '骨シンチ',
        },
    },
    {
        component: 'Text',
        props: {
            children: 'その他',
        },
    },
    {
        formPath: '',
        component: 'etcTextInput',
        props: {
            label: '',
        },
    },
]

const petCt = [
    {
        component: 'RadioYesNo',
        formPath: 'diabetes',
        props: {
            label: '保険適応/悪性腫瘍(早期胃がん除く)糖尿病',
        },
    },
    {
        component: 'RadioYesNo',
        formPath: 'insulin_injection',
        props: {
            label: 'インシュリン注射',
            pt: 14,
        },
    },
    {
        component: 'TextInput',
        formPath: 'blood_glucose_level',
        props: {
            label: '血糖値(mg/dL)',
            pt: 14,
        },
    },
    {
        component: 'TextInput',
        formPath: 'a1c',
        props: {
            label: 'A1C(%)',
            pt: 14,
        },
    },
]

const etc_1 = [
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '胸部単純撮影(立位)',
            pt: 40,
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '採血（',
            value: 'bloodSample',
            pt: 40,
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '至急の場合はチェック　）',
            value: 'urgen',
            pt: 40,
        },
    },
    {
        formPath: '',
        component: 'Select',
        props: {
            label: '採血セット',
            data: [
                '初回',
                '定期Ⅰ',
                '定期Ⅱ',
                '定期(腫瘍)',
                '定期(薬物)',
                '特養定期Ⅰ',
                '特養定期Ⅱ',
                '特養甲状腺',
                '特養初診',
            ],
        },
    },
    {
        formPath: '',
        component: 'etcTextInput',
        props: {
            label: '採血オプション',
            value: '',
            pt: 8,
        },
    },
]

const etc_2 = [
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'ECG',
            pt: 40,
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'BMD',
            pt: 40,
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'MMG',
            pt: 40,
        },
    },
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'カメラ',
            pt: 40,
        },
    },
    {
        formPath: 'camera_content',
        component: 'Select',
        props: {
            label: 'カメラ内容',
            data: ['胃', '大腸', '胃・大腸'],
        },
    },
]

const text = [
    {
        formPath: 'main_complaint',
        component: 'Textarea',
        props: {
            label: '主訴',
        },
    },
    {
        formPath: 'exam_target',
        component: 'Textarea',
        props: {
            label: '検査目的',
        },
    },
    {
        component: 'Blank',
    },
]

const contact = [
    {
        formPath: 'kensa',
        component: 'RadioMorningDaytime',
        props: {
            label: '食止め',
        },
    },
    {
        formPath: 'kensa',
        component: 'RadioMorningDaytime',
        props: {
            label: '服止め',
        },
    },
    {
        formPath: 'message',
        component: 'Textarea',
        props: {
            label: '連絡事項',
        },
    },
]
