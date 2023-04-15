<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExaminationClinicRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|unique:examination_clinics',
            'abbreviation' => 'nullable',
            'postal_code' => 'nullable',
            'address' => 'nullable',
            'phone_number' => 'nullable',
            'fax_number' => 'nullable',
        ];
    }
}
