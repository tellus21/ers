<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function rules()
    {
        return [
            'home_care_clinic_id' => 'required|exists:home_care_clinics,id',
            'examination_clinic_id' => 'required|exists:examination_clinics,id',
            'login_name' => 'required|unique:users',
            'password' => 'required',
            'last_name' => 'required',
            'first_name' => 'required',
            'authority' => 'required',
            'email_address' => 'nullable',
        ];
    }
}
