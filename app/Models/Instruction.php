<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Instruction extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'examination_clinic_id',
        'home_care_doctor_id',
        'order_id',
        'appointment_content',
        'candidate_month_1',
        'candidate_month_2',
        'has_ct_contrast',
        'ct_creatinine_value',
        'has_brain_pelvis',
        'has_head',
        'has_thoracic',
        'has_abdomen',
        'has_pelvis',
        'has_lung_pelvis',
        'has_cervical_spine',
        'has_thoracic_spine',
        'has_lumbar_spine',
        'has_cta_head',
        'has_cta_heart',
        'has_cta_trunk',
        'has_cta_lower_limb',
        'has_ct_other',
        'has_mri_contrast',
        'mri_creatinine_value',
        'has_head_mri',
        'has_vsrad',
        'has_head_neck',
        'has_breast',
        'has_liver_gallbladder_pancreas_spleen',
        'has_kidney_adrenal',
        'has_pelvis_bone',
        'has_jaw_joint',
        'has_shoulder_joint',
        'has_elbow_joint',
        'has_hand_joint',
        'has_thigh_joint',
        'has_knee_joint',
        'has_foot_joint',
        'has_cervical_spine_spinal_cord',
        'has_thoracic_spine_spinal_cord',
        'has_lumbar_spine_spinal_cord',
        'has_mra_head',
        'has_mra_neck',
        'has_mra_kidney',
        'has_mra_lower_limb',
        'has_mri_other',
        'has_thyroid',
        'has_carotid_artery',
        'has_heart',
        'has_breast_mri',
        'has_abdomen_mri',
        'has_lower_limb_artery',
        'has_lower_limb_vein',
        'has_abi',
        'has_us_other',
        'has_brain_ecd',
        'has_brain_imp_qualitative',
        'has_brain_datscan',
        'has_thyroid_tc',
        'has_heart_mibg',
        'has_bmipp',
        'has_bone_scintigraphy',
        'has_spect_other',
        'has_diabetes',
        'can_insulin_injection',
        'blood_glucose_value',
        'a1c',
        'has_chest_simple_photography',
        'has_blood_drawing',
        'is_urgent',
        'blood_drawing_set',
        'blood_drawing_option',
        'has_ecg',
        'has_bmd',
        'has_mmg',
        'has_camera',
        'camera_content',
        'chief_complaint',
        'examination_purpose',
        'fasting',
        'medication_stop',
        'contact_information'
    ];

    public function examinationClinic()
    {
        return $this->belongsTo(ExaminationClinic::class);
    }

    public function homeCareDoctor()
    {
        return $this->belongsTo(HomeCareDoctor::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
