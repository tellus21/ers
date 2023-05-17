<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatientRequest extends FormRequest
{
    public function rules()
    {
        return [
            'home_care_clinic_id' => 'required|integer|exists:home_care_clinics,id',
            'home_care_doctor_id' => 'integer|exists:home_care_doctors,id',
            'nursing_home_id' => 'required|integer|exists:nursing_homes,id',
            'karte_number_home' => 'nullable|string',
            'last_name_kana' => 'nullable|string',
            'first_name_kana' => 'nullable|string',
            'last_name' => 'nullable|string',
            'first_name' => 'nullable|string',
            'birthday' => 'nullable|date',
            'gender' => 'nullable|string',
            'karte_number_lsi' => 'nullable|string',
            'karte_number_smile' => 'nullable|string',
            'karte_number_kotoni' => 'nullable|string',
            'karte_number_kita' => 'nullable|string',
        ];
    }
}
