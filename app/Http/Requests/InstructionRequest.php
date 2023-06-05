<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InstructionRequest extends FormRequest
{
    public function rules()
    {
        return array_merge(
            $this->basicRules(),
            $this->ctRules(),
            $this->mriRules(),
            $this->usRules(),
            $this->spectRules(),
            $this->otherRules()
        );
    }

    private function basicRules()
    {
        return [
            'id' => 'required|integer',
            'examination_clinic_id' => 'nullable|integer|exists:examination_clinics,id',
            'home_care_doctor_id' => 'nullable|integer|exists:home_care_doctors,id',
            'order_id' => 'required|integer|exists:orders,id',
            'appointment_content' => 'nullable|string|max:255',
            'candidate_month_1' => 'nullable|date',
            'candidate_month_2' => 'nullable|date',
        ];
    }

    private function ctRules()
    {
        return [
            'has_ct_contrast' => 'required|boolean',
            'ct_creatinine_value' => 'nullable|string|max:255',
            'has_brain_pelvis' => 'required|boolean',
            'has_head' => 'required|boolean',
            'has_thoracic' => 'required|boolean',
            'has_abdomen' => 'required|boolean',
            'has_pelvis' => 'required|boolean',
            'has_lung_pelvis' => 'required|boolean',
            'has_cervical_spine' => 'required|boolean',
            'has_thoracic_spine' => 'required|boolean',
            'has_lumbar_spine' => 'required|boolean',
            'has_cta_head' => 'required|boolean',
            'has_cta_heart' => 'required|boolean',
            'has_cta_trunk' => 'required|boolean',
            'has_cta_lower_limb' => 'required|boolean',
            'has_ct_other' => 'nullable|string|max:255',
        ];
    }

    private function mriRules()
    {
        return [
            'has_mri_contrast' => 'required|boolean',
            'mri_creatinine_value' => 'nullable|string|max:255',
            'has_head_mri' => 'required|boolean',
            'has_vsrad' => 'required|boolean',
            'has_head_neck' => 'required|boolean',
            'has_breast' => 'required|boolean',
            'has_liver_gallbladder_pancreas_spleen' => 'required|boolean',
            'has_kidney_adrenal' => 'required|boolean',
            'has_pelvis_bone' => 'required|boolean',
            'has_jaw_joint' => 'required|boolean',
            'has_shoulder_joint' => 'required|boolean',
            'has_elbow_joint' => 'required|boolean',
            'has_hand_joint' => 'required|boolean',
            'has_thigh_joint' => 'required|boolean',
            'has_knee_joint' => 'required|boolean',
            'has_foot_joint' => 'required|boolean',
            'has_cervical_spine_spinal_cord' => 'required|boolean',
            'has_thoracic_spine_spinal_cord' => 'required|boolean',
            'has_lumbar_spine_spinal_cord' => 'required|boolean',
            'has_mra_head' => 'required|boolean',
            'has_mra_neck' => 'required|boolean',
            'has_mra_kidney' => 'required|boolean',
            'has_mra_lower_limb' => 'required|boolean',
            'has_mri_other' => 'nullable|string|max:255',
        ];
    }

    private function usRules()
    {
        return [
            'has_thyroid' => 'required|boolean',
            'has_carotid_artery' => 'required|boolean',
            'has_heart' => 'required|boolean',
            'has_breast_mri' => 'required|boolean',
            'has_abdomen_mri' => 'required|boolean',
            'has_lower_limb_artery' => 'required|boolean',
            'has_lower_limb_vein' => 'required|boolean',
            'has_abi' => 'required|boolean',
            'has_us_other' => 'nullable|string|max:255',
        ];
    }

    private function spectRules()
    {
        return [
            'has_brain_ecd' => 'required|boolean',
            'has_brain_imp_qualitative' => 'required|boolean',
            'has_brain_datscan' => 'required|boolean',
            'has_thyroid_tc' => 'required|boolean',
            'has_heart_mibg' => 'required|boolean',
            'has_bmipp' => 'required|boolean',
            'has_bone_scintigraphy' => 'required|boolean',
            'has_spect_other' => 'nullable|string|max:255',
        ];
    }

    private function otherRules()
    {
        return [
            'has_diabetes' => 'nullable|string',
            'can_insulin_injection' => 'nullable|string',
            'blood_glucose_value' => 'nullable|string|max:255',
            'a1c' => 'nullable|string|max:255',
            'has_chest_simple_photography' => 'required|boolean',
            'has_blood_drawing' => 'required|boolean',
            'is_urgent' => 'required|boolean',
            'blood_drawing_set' => 'nullable|string|max:255',
            'blood_drawing_option' => 'nullable|string|max:255',
            'has_ecg' => 'required|boolean',
            'has_bmd' => 'required|boolean',
            'has_mmg' => 'required|boolean',
            'has_camera' => 'required|boolean',
            'camera_content' => 'nullable|string|max:255',
            'chief_complaint' => 'nullable|string',
            'examination_purpose' => 'nullable|string',
            'fasting' => 'nullable|string|max:255',
            'medication_stop' => 'nullable|string|max:255',
            'contact_information' => 'nullable|string',
            'created_at' => 'nullable|date',
            'updated_at' => 'nullable|date',
            'deleted_at' => 'nullable|date',
        ];
    }
}
