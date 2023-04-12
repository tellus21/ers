export function useInstractionFields() {
    const metaData = useMetaData()

    const fields = {
        metaData: metaData,
        ct: ct,
        ctContrast: ctContrast,
        mri: mri,
        mriContrast: mriContrast,
        us: us,
        spect: spect,
        petCt: petCt,
        etcExams: etcExams,
        bloodSample: bloodSample,
        text: text,
        message: message,
    }

    return {
        fields,
    }
}

const useMetaData = () => {
    return [
        {
            formPath: 'exam_clinic',
            component: 'Select',
            props: {
                label: '検査クリニック',
                data: [
                    'LSI札幌クリニック',
                    'きた在宅クリニック',
                    'スマイル健康クリニック',
                ], //サンプル
                withAsterisk: true,
            },
        },
        {
            formPath: 'order_doctor',
            component: 'Select',
            props: {
                label: '指示医師',
                data: ['杉江先生', '深浦先生'], //サンプル
                withAsterisk: true,
            },
        },
        {
            formPath: '',
            component: 'Select',
            props: {
                data: ['定期', '臨時', '急ぎ', '緊急'],
                label: '予約内容', //緊急度とかのほうが
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

const ctContrast = [
    {
        formPath: 'ct_contrast',
        component: 'CheckboxCenter',
        props: {
            label: '造影',
        },
    },
]

const ct = [
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
    {
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '脊椎',
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
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'その他',
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

const mriContrast = [
    {
        formPath: 'mri_contrast',
        component: 'CheckboxCenter',
        props: {
            label: '造影',
        },
    },
]

const mri = [
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
        formPath: '',
        component: 'Checkbox',
        props: {
            label: '脊髄',
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
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'その他',
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
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'その他',
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
        formPath: '',
        component: 'Checkbox',
        props: {
            label: 'その他',
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
            label: '糖尿病',
        },
    },
    {
        component: 'RadioYesNo',
        formPath: 'insulin_injection',
        props: {
            label: 'インシュリン注射',
        },
    },
    {
        component: 'TextInput',
        formPath: 'blood_glucose_level',
        props: {
            label: '血糖値(mg/dL)',
        },
    },
    {
        component: 'TextInput',
        formPath: 'a1c',
        props: {
            label: 'A1C(%)',
        },
    },
]

const etcExams = [
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

const bloodSample = [
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
            value: '',
        },
    },
    {
        formPath: '',
        component: 'etcTextInput',
        props: {
            label: '採血オプション',
            value: '',
            pt: 10,
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

const message = [
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
