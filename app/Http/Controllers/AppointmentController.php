<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;

class AppointmentController extends Controller
{
    public function index()
    {
        return Appointment::with('user', 'instruction.request.patient.homeCareClinic')->get();
    }

    public function store(AppointmentRequest $request)
    {
        $appointment = Appointment::create($request->validated());
        return $appointment;
    }

    public function show(Appointment $appointment)
    {
        return $appointment->with('user', 'instruction.request.patient.homeCareClinic')->first();
    }

    public function update(AppointmentRequest $request, Appointment $appointment)
    {
        $appointment->update($request->validated());
        return $appointment;
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return response()->json(['message' => 'Appointment deleted']);
    }

    public function download_fax($id)
    {
        // データベースからデータを取得
        $appointment = Appointment::find($id)->with('instruction.request.patient.homeCareClinic', 'instruction.examinationClinic')->first();
        $instruction = $appointment->instruction;
        $request = $instruction->request;
        $patient = $request->patient;
        $nursing_home = $patient->nursingHome;
        $homeCareClinic = $patient->homeCareClinic;
        $examinationClinic = $instruction->examinationClinic;

        // CTの検査項目
        $examination_ct = [
            'has_ct_contrast' => 'CT_造影',
            'has_brain_pelvis' => '脳と肺から骨盤まで',
            'has_head' => '頭',
            'has_thoracic' => '胸部',
            'has_abdomen' => '腹部',
            'has_pelvis' => '骨盤部',
            'has_lung_pelvis' => '肺から骨盤まで',
            'has_cervical_spine' => '脊椎_頚',
            'has_thoracic_spine' => '脊椎_胸',
            'has_lumbar_spine' => '脊椎_腰',
            'has_cta_head' => 'CTA_頭',
            'has_cta_heart' => 'CTA_心臓',
            'has_cta_trunk' => 'CTA_体幹部',
            'has_cta_lower_limb' => 'CTA_下肢',
            'has_ct_other' => 'CT_その他',
        ];

        // MRIの検査項目
        $examination_mri = [
            'has_mri_contrast' => 'MRI_造影',
            'has_head_mri' => 'MRI_頭',
            'has_vsrad' => 'VSRAD',
            'has_head_neck' => '頭頸部',
            'has_breast' => '乳腺',
            'has_liver_gallbladder_pancreas_spleen' => '肝・胆・膵・脾',
            'has_kidney_adrenal' => '腎・副腎',
            'has_pelvis_bone' => '骨盤部',
            'has_jaw_joint' => '関節_顎',
            'has_shoulder_joint' => '関節_肩',
            'has_elbow_joint' => '関節_肘',
            'has_hand_joint' => '関節_手',
            'has_thigh_joint' => '関節_股',
            'has_knee_joint' => '関節_膝',
            'has_foot_joint' => '関節_足',
            'has_cervical_spine_spinal_cord' => '脊椎・脊髄_頚',
            'has_thoracic_spine_spinal_cord' => '脊椎・脊髄_胸',
            'has_lumbar_spine_spinal_cord' => '脊椎・脊髄_腰',
            'has_mra_head' => 'MRA_頭',
            'has_mra_neck' => 'MRA_頚',
            'has_mra_kidney' => 'MRA_腎',
            'has_mra_lower_limb' => 'MRA_下肢',
            'has_mri_other' => 'MRI_その他',
        ];

        // USの検査項目
        $examination_us = [
            'has_thyroid' => '甲状腺',
            'has_carotid_artery' => '頸動脈',
            'has_heart' => '心臓',
            'has_breast_mri' => '乳腺',
            'has_abdomen_mri' => '腹部',
            'has_lower_limb_artery' => '下肢動脈',
            'has_lower_limb_vein' => '下肢静脈',
            'has_abi' => 'ABI',
            'has_us_other' => 'US_その他',
        ];

        // SPECT/シンチグラム線の検査項目
        $examination_spect = [
            'has_brain_ecd' => '脳（ECD）',
            'has_brain_imp_qualitative' => '脳（IMP定性）',
            'has_brain_datscan' => '脳（DATscan）',
            'has_thyroid_tc' => '甲状腺（Tc）',
            'has_heart_mibg' => '心臓（MIBG）',
            'has_bmipp' => 'BMIPP',
            'has_bone_scintigraphy' => '骨シンチ',
            'has_spect_other' => 'SPECT_その他',
        ];

        // その他の検査項目
        // 表示しなくてもよいか??
        $examination_etc = [
            'has_chest_simple_photography' => '胸部単純撮影(立位)',
            'has_blood_drawing' => '採血',
            // 'is_urgent' => '至急',
            'blood_drawing_set' => '採血セット',
            'blood_drawing_option' => '採血オプション',
            'has_ecg' => 'ECG',
            'has_bmd' => 'BMD',
            'has_mmg' => 'MMG',
            'has_camera' => 'カメラ',
            // 'camera_content' => 'カメラ内容',
        ];

        // 置換する文字列を配列で保存
        //　適当なので、見直す！！！！！！！！！！！！！
        // last_nameとfirst_nameは、伏字が必要になるので、別途処理が必要
        $faxItems = [
            '$transmission_date' => convertISO8601ToDate($appointment->transmission_date),
            '$nursing_home.name' => $nursing_home->name,
            '$nursing_home.fax_number' => $nursing_home->fax_number,
            '$number_of_documents_sent' => $appointment->number_of_documents_sent,
            '$home_care_clinic.name' => $homeCareClinic->name,
            '$home_care_clinic.postal_code' => $homeCareClinic->postal_code,
            '$home_care_clinic.address' => $homeCareClinic->address,
            '$home_care_clinic.phone_number' => $homeCareClinic->phone_number,
            '$home_care_clinic.fax_number' => $homeCareClinic->fax_number,
            '$nursing_home.name' => $nursing_home->name,
            '$last_name' => hideSecondCharacter($patient->last_name),
            '$first_name' => hideSecondCharacter($patient->first_name),
            '$scheduled_confirmation_date' => convertISO8601ToDate($appointment->scheduled_confirmation_date),
            '$start_time' => $appointment->start_time,
            '$examination_clinic.name' => $instruction->examinationClinic->name,



            // '$examination_clinic.name' => $instruction->examinationClinic->name,
            // '$postal_code' => $examinationClinic->postal_code,
            // '$address' => $homeCareClinic->address,
            // '$phone_number' => $homeCareClinic->phone_number,
            // '$fax_number' => $homeCareClinic->fax_number,
            // '$nursing_home.name' => $homeCareClinic->name,

        ];

        // CT検査項目の表示
        $display_examination_ct = [];
        foreach ($examination_ct as $key => $value) {
            if ($instruction->$key == true) {
                array_push($display_examination_ct, $value);
            }
        }
        $display_examination_ct = implode(',', $display_examination_ct);
        $faxItems['$display_examination_ct'] = "CT($display_examination_ct)";

        // MRI検査項目の表示
        $display_examination_mri = [];
        foreach ($examination_mri as $key => $value) {
            if ($instruction->$key == true) {
                array_push($display_examination_mri, $value);
            }
        }
        $display_examination_mri = implode(',', $display_examination_mri);
        $faxItems['$display_examination_mri'] = "MRI($display_examination_mri)";

        // US(エコー)検査項目の表示
        $display_examination_us = [];
        foreach ($examination_us as $key => $value) {
            if ($instruction->$key == true) {
                array_push($display_examination_us, $value);
            }
        }
        $display_examination_us = implode(',', $display_examination_us);
        $faxItems['$display_examination_us'] = "エコー($display_examination_us)";

        // SPECT/シンチグラム検査項目の表示
        $display_examination_spect = [];
        foreach ($examination_spect as $key => $value) {
            if ($instruction->$key == true) {
                array_push($display_examination_spect, $value);
            }
        }
        $display_examination_spect = implode(',', $display_examination_spect);
        $faxItems['$display_examination_spect'] = "RI($display_examination_spect)";

        // $display_examination_etc = [];
        // foreach ($examination_etc as $key => $value) {
        //     if ($instruction->$key == true) {
        //         array_push($display_examination_etc, $value);
        //     }
        // }
        // $display_examination_etc = implode(',', $display_examination_etc);
        // $faxItems['$display_examination_etc'] = $display_examination_etc;


        // テンプレートのファイルパスを指定
        $templatePath = public_path('templates/' . 'template_fax.xlsx');

        // 保存先のファイルパスを指定
        $savePath = public_path('downloads/' . 'FAX_' . $appointment->id . '.xlsx');

        // ファイルを置換して保存
        replaceStringInXlsx($templatePath, $faxItems, $savePath);

        // 同じセルに複数回置換する場合は、複数回呼び出す
        replaceStringInXlsx($savePath, $faxItems, $savePath);
        replaceStringInXlsx($savePath, $faxItems, $savePath);

        return response()->download($savePath);
    }
}
