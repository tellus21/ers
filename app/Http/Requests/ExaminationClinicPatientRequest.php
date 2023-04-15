<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExaminationClinicPatientRequest extends FormRequest
{
    public function rules()
    {
        return [
            'examination_clinic_id' => 'required|integer|exists:examination_clinics,id',
            'patient_id' => 'required|integer|exists:patients,id',
            'exam_karte_number' => 'required|string',
        ];
    }
}
