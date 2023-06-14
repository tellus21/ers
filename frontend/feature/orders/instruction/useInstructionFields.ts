import { useExaminationClinicFeature } from '@/feature/examination-clinics/examinationClinicFeature'
import { useHomeCareDoctorFeature } from '@/feature/home-care-doctors/homeCareDoctorFeature'

export function useInstructionFields() {
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
    const { examinationClinicNames } = useExaminationClinicFeature()
    const { homeCareDoctorNames } = useHomeCareDoctorFeature()

    return [
        {
            formPath: 'examination_clinic.name',
            component: 'Select',
            props: {
                label: '検査クリニック',
                data: examinationClinicNames,
                withAsterisk: true,
            },
        },
        {
            formPath: 'home_care_doctor.name',
            component: 'Select',
            props: {
                label: '指示医師',
                data: homeCareDoctorNames,
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
        formPath: 'has_ct_contrast',
        component: 'Checkbox',
        props: {
            label: '造影',
        },
    },
    {
        component: 'Text',
        props: {
            children: '　　クレアチニン値(mg/dl)',
        },
    },
    {
        formPath: 'ct_creatinine_value',
        component: 'etcTextInput',
        props: {
            label: '',
            pb: 4,
        },
    },
    {
        component: 'Text',
        props: {
            children: '※直近3カ月以内の数値',
            color: 'red.6',
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
        formPath: 'has_thoracic',
        component: 'Checkbox',
        props: {
            label: '胸部',
        },
    },
    {
        formPath: 'has_abdomen',
        component: 'Checkbox',
        props: {
            label: '腹部',
        },
    },
    {
        formPath: 'has_pelvis',
        component: 'Checkbox',
        props: {
            label: '骨盤部',
        },
    },
    {
        formPath: 'has_lung_pelvis',
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
        formPath: 'has_cervical_spine',
        component: 'Checkbox',
        props: {
            label: '頚',
        },
    },
    {
        formPath: 'has_thoracic_spine',
        component: 'Checkbox',
        props: {
            label: '胸',
        },
    },
    {
        formPath: 'has_lumbar_spine',
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
        formPath: 'has_cta_head',
        component: 'Checkbox',
        props: {
            label: '頭',
        },
    },
    {
        formPath: 'has_cta_heart',
        component: 'Checkbox',
        props: {
            label: '心臓',
        },
    },
    {
        formPath: 'has_cta_trunk',
        component: 'Checkbox',
        props: {
            label: '体幹部',
        },
    },
    {
        formPath: 'has_cta_lower_limb',
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
        formPath: 'has_ct_other',
        component: 'etcTextInput',
        props: {
            label: '',
        },
    },
]

const mri_1 = [
    {
        formPath: 'has_mri_contrast',
        component: 'Checkbox',
        props: {
            label: '造影',
        },
    },
    {
        component: 'Text',
        props: {
            children: '　　クレアチニン値(mg/dl)',
        },
    },
    {
        formPath: 'mri_creatinine_value',
        component: 'etcTextInput',
        props: {
            label: '',
            pb: 4,
        },
    },
    {
        component: 'Text',
        props: {
            children: '※直近3カ月以内の数値',
            color: 'red.6',
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
        formPath: 'has_vsrad',
        component: 'Checkbox',
        props: {
            label: 'VSRAD',
        },
    },
    {
        formPath: 'has_head_neck',
        component: 'Checkbox',
        props: {
            label: '頭頸部',
        },
    },
    {
        formPath: 'has_breast',
        component: 'Checkbox',
        props: {
            label: '乳腺',
        },
    },
    {
        formPath: 'has_liver_gallbladder_pancreas_spleen',
        component: 'Checkbox',
        props: {
            label: '肝・胆・膵・脾',
        },
    },
    {
        formPath: 'has_kidney_adrenal',
        component: 'Checkbox',
        props: {
            label: 'MRCP',
        },
    },
    {
        formPath: 'has_pelvis_bone',
        component: 'Checkbox',
        props: {
            label: '腎・副腎',
        },
    },
    {
        formPath: 'has_joint',
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
        formPath: 'has_shoulder_joint',
        component: 'Checkbox',
        props: {
            label: '肩',
        },
    },
    {
        formPath: 'has_elbow_joint',
        component: 'Checkbox',
        props: {
            label: '肘',
        },
    },
    {
        formPath: 'has_hand_joint',
        component: 'Checkbox',
        props: {
            label: '手',
        },
    },
    {
        formPath: 'has_thigh_joint',
        component: 'Checkbox',
        props: {
            label: '股',
        },
    },
    {
        formPath: 'has_knee_joint',
        component: 'Checkbox',
        props: {
            label: '膝',
        },
    },
    {
        formPath: 'has_foot_joint',
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
        formPath: 'has_cervical_spine_spinal_cord',
        component: 'Checkbox',
        props: {
            label: '頚',
        },
    },
    {
        formPath: 'has_thoracic_spine_spinal_cord',
        component: 'Checkbox',
        props: {
            label: '胸',
        },
    },
    {
        formPath: 'has_lumbar_spine_spinal_cord',
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
        formPath: 'has_mra_head',
        component: 'Checkbox',
        props: {
            label: '頭',
        },
    },
    {
        formPath: 'has_mra_neck',
        component: 'Checkbox',
        props: {
            label: '頚',
        },
    },
    {
        formPath: 'has_mra_kidney',
        component: 'Checkbox',
        props: {
            label: '腎',
        },
    },
    {
        formPath: 'has_mra_lower_limb',
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
        formPath: 'has_mri_other',
        component: 'etcTextInput',
        props: {
            label: '',
        },
    },
]

const us = [
    {
        formPath: 'has_thyroid',
        component: 'Checkbox',
        props: {
            label: '甲状腺',
        },
    },
    {
        formPath: 'has_carotid_artery',
        component: 'Checkbox',
        props: {
            label: '頸動脈',
        },
    },
    {
        formPath: 'has_heart',
        component: 'Checkbox',
        props: {
            label: '心臓',
        },
    },
    {
        formPath: 'has_breast_mri',
        component: 'Checkbox',
        props: {
            label: '乳腺',
        },
    },
    {
        formPath: 'has_abdomen_mri',
        component: 'Checkbox',
        props: {
            label: '腹部',
        },
    },
    {
        formPath: 'has_lower_limb_artery',
        component: 'Checkbox',
        props: {
            label: '下肢動脈',
        },
    },
    {
        formPath: 'has_lower_limb_vein',
        component: 'Checkbox',
        props: {
            label: '下肢静脈',
        },
    },
    {
        formPath: 'has_abi',
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
        formPath: 'has_us_other',
        component: 'etcTextInput',
        props: {
            label: '',
        },
    },
]

const spect = [
    {
        formPath: 'has_brain_ecd',
        component: 'Checkbox',
        props: {
            label: '脳（ECD）',
        },
    },
    {
        formPath: 'has_brain_imp_qualitative',
        component: 'Checkbox',
        props: {
            label: '脳（IMP定性）',
        },
    },
    {
        formPath: 'has_brain_datscan',
        component: 'Checkbox',
        props: {
            label: '脳（DATscan）',
        },
    },
    {
        formPath: 'has_thyroid_tc',
        component: 'Checkbox',
        props: {
            label: '甲状腺（Tc）',
        },
    },
    {
        formPath: 'has_heart_mibg',
        component: 'Checkbox',
        props: {
            label: '心臓（MIBG）',
        },
    },
    {
        formPath: 'has_bmipp',
        component: 'Checkbox',
        props: {
            label: 'BMIPP',
        },
    },
    {
        formPath: 'has_bone_scintigraphy',
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
        formPath: 'has_spect_other',
        component: 'etcTextInput',
        props: {
            label: '',
        },
    },
]

const petCt = [
    {
        formPath: 'has_diabetes',
        component: 'RadioYesNo',
        props: {
            label: '保険適応/悪性腫瘍(早期胃がん除く)糖尿病',
        },
    },
    {
        formPath: 'can_insulin_injection',
        component: 'RadioYesNo',
        props: {
            label: 'インシュリン注射',
        },
    },
    {
        formPath: 'blood_glucose_value',
        component: 'TextInput',
        props: {
            label: '血糖値(mg/dL)',
        },
    },
    {
        formPath: 'a1c',
        component: 'TextInput',
        props: {
            label: 'A1C(%)',
        },
    },
]

const etc_1 = [
    {
        formPath: 'has_chest_simple_photography',
        component: 'Checkbox',
        props: {
            label: '胸部単純撮影(立位)',
            pt: 40,
        },
    },
    {
        formPath: 'has_blood_drawing',
        component: 'Checkbox',
        props: {
            label: '採血（',
            value: 'bloodSample',
            pt: 40,
        },
    },
    {
        formPath: 'is_urgent',
        component: 'Checkbox',
        props: {
            label: '至急の場合はチェック　）',
            value: 'urgen',
            pt: 40,
        },
    },
    {
        formPath: 'blood_drawing_set',
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
        formPath: 'blood_drawing_option',
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
        formPath: 'has_ecg',
        component: 'Checkbox',
        props: {
            label: 'ECG',
            pt: 40,
        },
    },
    {
        formPath: 'has_bmd',
        component: 'Checkbox',
        props: {
            label: 'BMD',
            pt: 40,
        },
    },
    {
        formPath: 'has_mmg',
        component: 'Checkbox',
        props: {
            label: 'MMG',
            pt: 40,
        },
    },
    {
        formPath: 'has_camera',
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
        formPath: 'chief_complaint',
        component: 'LongTextInput',
        props: {
            label: '主訴',
        },
    },
    {
        formPath: 'examination_purpose',
        component: 'Textarea',
        props: {
            label: '検査目的',
        },
    },
]

const contact = [
    {
        formPath: 'fasting',
        component: 'RadioMorningDaytime',
        props: {
            label: '食止め',
        },
    },
    {
        formPath: 'medication_stop',
        component: 'RadioMorningDaytime',
        props: {
            label: '内服中止',
        },
    },
    {
        formPath: 'medication_content',
        component: 'HalfTextarea',
        props: {
            label: '内服内容',
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
