<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HomeCareClinicRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required',
            'abbreviation' => 'nullable',
            'postal_code' => 'nullable',
            'address' => 'nullable',
            'phone_number' => 'nullable',
            'fax_number' => 'nullable',
        ];
    }
}
