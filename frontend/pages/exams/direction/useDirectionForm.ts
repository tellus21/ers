export function useDirectionForm() {
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
        component: 'Checkbox',
        props: {
            label: '造影',
        },
        formPath: 'ct_contrast',
    },
]

const ct = [
    {
        component: 'CheckboxGroup',
        formPath: 'ct_direction',
        etcFormPath: 'ct_etc',
        props: {
            children: [
                {
                    label: '脳と肺から骨盤まで',
                    value: 'brain_to',
                },
                {
                    label: '頭',
                    value: 'ct_head',
                },
                {
                    label: '胸部',
                    value: 'chest',
                },
                {
                    label: '腹部',
                    value: 'abdominal',
                },
                {
                    label: '骨盤部',
                    value: 'pelvis_department',
                },
                {
                    label: '肺から骨盤まで　　脊椎（',
                    value: 'from_lung_up_to_pelvis',
                },
                // {
                //     label: '脊椎（',
                //     value: 'spine',
                // },
                {
                    label: '頚',
                    value: 'spine_neck',
                },
                {
                    label: '胸',
                    value: 'spine_breast',
                },
                {
                    label: '腰　）　CTA (',
                    value: 'spine_waist',
                },
                // {
                //     label: 'CTA（',
                //     value: 'cta',
                // },
                {
                    label: '頭',
                    value: 'cta_head',
                },
                {
                    label: '心臓',
                    value: 'cta_heart',
                },
                {
                    label: '体幹部',
                    value: 'cta_body_executive',
                },
                {
                    label: '下肢　）',
                    value: 'cta_lower_extremity',
                },
            ],
        },
    },
]

const mriContrast = [
    {
        component: 'Checkbox',
        props: {
            label: '造影',
        },
        formPath: 'mri_contrast',
    },
]

const mri = [
    {
        component: 'CheckboxGroup',
        formPath: 'mri_direction',
        etcFormPath: 'mri_etc',
        props: {
            children: [
                {
                    label: '頭',
                    value: 'mri_head',
                },
                {
                    label: 'VSRAD',
                    value: 'vsrad',
                },
                {
                    label: '頭頸部',
                    value: 'head_and_neck',
                },
                {
                    label: '乳腺',
                    value: 'mammary_gland',
                },
                {
                    label: '肝・胆・膵・脾',
                    value: 'liver_bile_pancreas_spleen',
                },
                {
                    label: '腎・副腎',
                    value: 'renal_adrenal_gland',
                },
                {
                    label: '骨盤部　　関節（',
                    value: 'pelvis_department',
                },
                // {
                //     label: '関節（',
                //     value: 'joint',
                // },
                {
                    label: '顎',
                    value: 'joint_neck',
                },
                {
                    label: '肘',
                    value: 'joint_type',
                },
                {
                    label: '手',
                    value: 'joint_elbow',
                },
                {
                    label: '股',
                    value: 'joint_crotch',
                },
                {
                    label: '膝',
                    value: 'joint_knee',
                },
                {
                    label: '足　）',
                    value: 'joint_foot',
                },
                {
                    label: '脊椎',
                    value: 'spine',
                },
                {
                    label: '脊髄',
                    value: 'spine_spinal_cord',
                },
                {
                    label: '頚',
                    value: 'spine_spinal_neck',
                },
                {
                    label: '胸',
                    value: 'spine_spinal_breast',
                },
                {
                    label: '腰',
                    value: 'spine_spinal_waist',
                },
                {
                    label: 'MRA',
                    value: 'mra',
                },
                {
                    label: '頭',
                    value: 'head',
                },
                {
                    label: '頚',
                    value: 'neck',
                },
                {
                    label: '腎',
                    value: 'renal',
                },
                {
                    label: '下肢',
                    value: '',
                },
            ],
        },
    },
]

const us = [
    {
        component: 'CheckboxGroup',
        formPath: 'us_direction',
        etcFormPath: 'us_etc',
        props: {
            children: [
                {
                    label: '甲状腺',
                    value: 'thyroid',
                },
                {
                    label: '頸動脈',
                    value: 'carotid_artery',
                },
                {
                    label: '心臓',
                    value: 'heart',
                },
                {
                    label: '乳腺',
                    value: 'mammary_gland',
                },
                {
                    label: '腹部',
                    value: 'abdominal',
                },
                {
                    label: '下肢動脈',
                    value: 'lower_extremity_artery',
                },
                {
                    label: '下肢静脈',
                    value: 'lower_extremity_vein',
                },
                {
                    label: 'ABI',
                    value: 'ankle_brachial_index',
                },
            ],
        },
    },
]

const spect = [
    {
        component: 'CheckboxGroup',
        formPath: 'spect_direction',
        etcFormPath: 'spect_etc',
        props: {
            children: [
                {
                    label: '脳（ECD）',
                    value: 'brain_ecd',
                },
                {
                    label: '脳（IMP定性）',
                    value: 'brain_imp_qualitative',
                },
                {
                    label: '脳（DATscan）',
                    value: 'brain_datscan',
                },
                {
                    label: '甲状腺（Tc）',
                    value: 'thyroid_tc',
                },
                {
                    label: '心臓（MIBG）',
                    value: 'heart_mibg',
                },
                {
                    label: 'BMIPP',
                    value: 'bmipp',
                },
                {
                    label: '骨シンチ',
                    value: 'bone_cinch',
                },
            ],
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
        formPath: 'etc_direction',
        component: 'CheckboxGroup',
        props: {
            children: [
                {
                    label: '胸部単純撮影(立位)',
                    value: '',
                },
                {
                    label: 'ECG',
                    value: '',
                },
                {
                    label: 'BMD',
                    value: '',
                },
                {
                    label: 'MMG',
                    value: '',
                },
                {
                    label: 'カメラ',
                    value: '',
                },
            ],
        },
        select: {
            props: {
                label: '',
                data: ['', '胃', '大腸', '胃・大腸'],
                formPath: 'camera_content',
            },
        },
    },
]

const bloodSample = [
    {
        formPath: 'etc_direction',
        component: 'CheckboxGroup',
        props: {
            children: [
                {
                    label: '採血（',
                    value: 'bloodSample',
                },
                {
                    label: '至急の場合はチェック　）',
                    value: 'urgen',
                },
            ],
        },
        select: {
            props: {
                label: '採血セット',
                data: [
                    '　',
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
                formPath: 'blood_sample_set',
            },
        },
        textInput: {
            props: { Label: '採血オプション', formPath: 'blood_sample_option' },
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
