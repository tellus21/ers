<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function rules()
    {
        return [
            //NGパターン
            // 'home_care_clinic_id' => 'required|exists:home_care_clinics,id',
            // 'examination_clinic_id' => 'required|exists:examination_clinics,id',
            // 'home_care_clinic_id' => 'required|integer|nullable',
            // 'examination_clinic_id' => 'required|integer|nullable',

            //OKパターン
            'home_care_clinic_id' => 'integer|nullable|exists:home_care_clinics,id',
            'examination_clinic_id' => 'integer|nullable|exists:examination_clinics,id',
            'login_name' => 'required',
            'password' => 'required',
            'last_name' => 'required',
            'first_name' => 'required',
            'authority' => 'required',
            'email_address' => 'nullable',
        ];
    }
}
