<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HomeCareClinicNursingHomeRequest extends FormRequest
{
    public function rules()
    {
        return [
            'home_care_clinic_id' => 'required|integer|exists:home_care_clinics,id',
            'nursing_home_id' => 'required|integer|exists:nursing_homes,id',
            'pickup_time' => 'nullable|string',
        ];
    }
}
