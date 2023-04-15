<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExaminationClinicRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|unique:examination_clinics,name',
            'abbreviation' => 'nullable|string',
            'postal_code' => 'nullable|string',
            'address' => 'nullable|string',
            'phone_number' => 'nullable|string',
            'fax_number' => 'nullable|string',
        ];
    }
}
