import { useQueryBase } from '@/common/hooks'
import { useForm } from '@mantine/form'
import { useInstructionFields } from './useInstructionFields'

// ---【Type】---
export interface Instruction {
    id: number
    examination_clinic_id: number | null
    home_care_doctor_id: number | null
    request_id: number
    appointment_content: string
    candidate_month_1: Date | null
    candidate_month_2: Date | null
    has_ct_contrast: boolean
    ct_creatinine_value: string
    has_brain_pelvis: boolean
    has_head: boolean
    has_thoracic: boolean
    has_abdomen: boolean
    has_pelvis: boolean
    has_lung_pelvis: boolean
    has_cervical_spine: boolean
    has_thoracic_spine: boolean
    has_lumbar_spine: boolean
    has_cta_head: boolean
    has_cta_heart: boolean
    has_cta_trunk: boolean
    has_cta_lower_limb: boolean
    has_ct_other: string
    has_mri_contrast: boolean
    mri_creatinine_value: string
    has_head_mri: boolean
    has_vsrad: boolean
    has_head_neck: boolean
    has_breast: boolean
    has_liver_gallbladder_pancreas_spleen: boolean
    has_kidney_adrenal: boolean
    has_pelvis_bone: boolean
    has_jaw_joint: boolean
    has_shoulder_joint: boolean
    has_elbow_joint: boolean
    has_hand_joint: boolean
    has_thigh_joint: boolean
    has_knee_joint: boolean
    has_foot_joint: boolean
    has_cervical_spine_spinal_cord: boolean
    has_thoracic_spine_spinal_cord: boolean
    has_lumbar_spine_spinal_cord: boolean
    has_mra_head: boolean
    has_mra_neck: boolean
    has_mra_kidney: boolean
    has_mra_lower_limb: boolean
    has_mri_other: string
    has_thyroid: boolean
    has_carotid_artery: boolean
    has_heart: boolean
    has_breast_mri: boolean
    has_abdomen_mri: boolean
    has_lower_limb_artery: boolean
    has_lower_limb_vein: boolean
    has_abi: boolean
    has_us_other: string
    has_brain_ecd: boolean
    has_brain_imp_qualitative: boolean
    has_brain_datscan: boolean
    has_thyroid_tc: boolean
    has_heart_mibg: boolean
    has_bmipp: boolean
    has_bone_scintigraphy: boolean
    has_spect_other: string
    has_diabetes: boolean
    can_insulin_injection: boolean
    blood_glucose_value: string
    a1c: string
    has_chest_simple_photography: boolean
    has_blood_drawing: boolean
    is_urgent: boolean
    blood_drawing_set: string
    blood_drawing_option: string
    has_ecg: boolean
    has_bmd: boolean
    has_mmg: boolean
    has_camera: boolean
    camera_content: string
    chief_complaint: string
    examination_purpose: string
    fasting: string
    medication_stop: string
    contact_information: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
}

// ---【FormValues】---
export interface InstructionFormValues extends Instruction {}

// ---【InitialValues】---
export const instructionInitialValues: InstructionFormValues = {
    id: 0,
    examination_clinic_id: null,
    home_care_doctor_id: null,
    request_id: 0,
    appointment_content: '',
    candidate_month_1: null,
    candidate_month_2: null,
    has_ct_contrast: false,
    ct_creatinine_value: '',
    has_brain_pelvis: false,
    has_head: false,
    has_thoracic: false,
    has_abdomen: false,
    has_pelvis: false,
    has_lung_pelvis: false,
    has_cervical_spine: false,
    has_thoracic_spine: false,
    has_lumbar_spine: false,
    has_cta_head: false,
    has_cta_heart: false,
    has_cta_trunk: false,
    has_cta_lower_limb: false,
    has_ct_other: '',
    has_mri_contrast: false,
    mri_creatinine_value: '',
    has_head_mri: false,
    has_vsrad: false,
    has_head_neck: false,
    has_breast: false,
    has_liver_gallbladder_pancreas_spleen: false,
    has_kidney_adrenal: false,
    has_pelvis_bone: false,
    has_jaw_joint: false,
    has_shoulder_joint: false,
    has_elbow_joint: false,
    has_hand_joint: false,
    has_thigh_joint: false,
    has_knee_joint: false,
    has_foot_joint: false,
    has_cervical_spine_spinal_cord: false,
    has_thoracic_spine_spinal_cord: false,
    has_lumbar_spine_spinal_cord: false,
    has_mra_head: false,
    has_mra_neck: false,
    has_mra_kidney: false,
    has_mra_lower_limb: false,
    has_mri_other: '',
    has_thyroid: false,
    has_carotid_artery: false,
    has_heart: false,
    has_breast_mri: false,
    has_abdomen_mri: false,
    has_lower_limb_artery: false,
    has_lower_limb_vein: false,
    has_abi: false,
    has_us_other: '',
    has_brain_ecd: false,
    has_brain_imp_qualitative: false,
    has_brain_datscan: false,
    has_thyroid_tc: false,
    has_heart_mibg: false,
    has_bmipp: false,
    has_bone_scintigraphy: false,
    has_spect_other: '',
    has_diabetes: false,
    can_insulin_injection: false,
    blood_glucose_value: '',
    a1c: '',
    has_chest_simple_photography: false,
    has_blood_drawing: false,
    is_urgent: false,
    blood_drawing_set: '',
    blood_drawing_option: '',
    has_ecg: false,
    has_bmd: false,
    has_mmg: false,
    has_camera: false,
    camera_content: '',
    chief_complaint: '',
    examination_purpose: '',
    fasting: '',
    medication_stop: '',
    contact_information: '',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: new Date(),
}

// ---【Feature】---
export function useInstructionFeature() {
    // ---【Name】---
    const logicalName = '指示内容'
    const resource = 'instructions'

    // ---【FormValues】---
    type FormValues = Omit<Instruction, 'id'>

    // ---【Validate】---
    const validate = {}

    // ---【Form】---
    const form = useForm<InstructionFormValues>({
        initialValues: instructionInitialValues,
        validate: validate,
    })

    //データが多いため、別ファイルに記載
    // ---【Fields】---
    const { fields } = useInstructionFields()

    // ---【API】---
    const { data: query } = useQueryBase(resource)

    return {
        logicalName,
        resource,
        form,
        query,
        fields,
    }
}
