<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstructionsTable extends Migration
{
    public function up()
    {
        Schema::create('instructions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('examination_clinic_id')->constrained('examination_clinics');
            $table->foreignId('home_care_doctor_id')->constrained('home_care_doctors');
            $table->foreignId('request_id')->constrained();
            $table->string('appointment_content')->nullable();
            $table->timestamp('candidate_month_1')->nullable();
            $table->timestamp('candidate_month_2')->nullable();
            $table->boolean('has_ct_contrast')->nullable();
            $table->string('ct_creatinine_value')->nullable();
            $table->boolean('has_brain_pelvis')->nullable();
            $table->boolean('has_head')->nullable();
            $table->boolean('has_thoracic')->nullable();
            $table->boolean('has_abdomen')->nullable();
            $table->boolean('has_pelvis')->nullable();
            $table->boolean('has_lung_pelvis')->nullable();
            $table->boolean('has_cervical_spine')->nullable();
            $table->boolean('has_thoracic_spine')->nullable();
            $table->boolean('has_lumbar_spine')->nullable();
            $table->boolean('has_cta_head')->nullable();
            $table->boolean('has_cta_heart')->nullable();
            $table->boolean('has_cta_trunk')->nullable();
            $table->boolean('has_cta_lower_limb')->nullable();
            $table->string('has_ct_other')->nullable();
            $table->boolean('has_mri_contrast')->nullable();
            $table->string('mri_creatinine_value')->nullable();
            $table->boolean('has_head_mri')->nullable();
            $table->boolean('has_vsrad')->nullable();
            $table->boolean('has_head_neck')->nullable();
            $table->boolean('has_breast')->nullable();
            $table->boolean('has_liver_gallbladder_pancreas_spleen')->nullable();
            $table->boolean('has_kidney_adrenal')->nullable();
            $table->boolean('has_pelvis_bone')->nullable();
            $table->boolean('has_jaw_joint')->nullable();
            $table->boolean('has_shoulder_joint')->nullable();
            $table->boolean('has_elbow_joint')->nullable();
            $table->boolean('has_hand_joint')->nullable();
            $table->boolean('has_thigh_joint')->nullable();
            $table->boolean('has_knee_joint')->nullable();
            $table->boolean('has_foot_joint')->nullable();
            $table->boolean('has_cervical_spine_spinal_cord')->nullable();
            $table->boolean('has_thoracic_spine_spinal_cord')->nullable();
            $table->boolean('has_lumbar_spine_spinal_cord')->nullable();
            $table->boolean('has_mra_head')->nullable();
            $table->boolean('has_mra_neck')->nullable();
            $table->boolean('has_mra_kidney')->nullable();
            $table->boolean('has_mra_lower_limb')->nullable();
            $table->string('has_mri_other')->nullable();
            $table->boolean('has_thyroid')->nullable();
            $table->boolean('has_carotid_artery')->nullable();
            $table->boolean('has_heart')->nullable();
            $table->boolean('has_breast_mri')->nullable();
            $table->boolean('has_abdomen_mri')->nullable();
            $table->boolean('has_lower_limb_artery')->nullable();
            $table->boolean('has_lower_limb_vein')->nullable();
            $table->boolean('has_abi')->nullable();
            $table->string('has_us_other')->nullable();
            $table->boolean('has_brain_ecd')->nullable();
            $table->boolean('has_brain_imp_qualitative')->nullable();
            $table->boolean('has_brain_datscan')->nullable();
            $table->boolean('has_thyroid_tc')->nullable();
            $table->boolean('has_heart_mibg')->nullable();
            $table->boolean('has_bmipp')->nullable();
            $table->boolean('has_bone_scintigraphy')->nullable();
            $table->string('has_spect_other')->nullable();
            $table->boolean('has_diabetes')->nullable();
            $table->boolean('can_insulin_injection')->nullable();
            $table->string('blood_glucose_value')->nullable();
            $table->string('a1c')->nullable();
            $table->boolean('has_chest_simple_photography')->nullable();
            $table->boolean('has_blood_drawing')->nullable();
            $table->boolean('is_urgent')->nullable();
            $table->string('blood_drawing_set')->nullable();
            $table->string('blood_drawing_option')->nullable();
            $table->boolean('has_ecg')->nullable();
            $table->boolean('has_bmd')->nullable();
            $table->boolean('has_mmg')->nullable();
            $table->boolean('has_camera')->nullable();
            $table->string('camera_content')->nullable();
            $table->text('chief_complaint')->nullable();
            $table->text('examination_purpose')->nullable();
            $table->string('fasting')->nullable();
            $table->string('medication_stop')->nullable();
            $table->text('contact_information')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('instructions');
    }
}
