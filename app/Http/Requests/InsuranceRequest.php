<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InsuranceRequest extends FormRequest
{
    public function rules()
    {
        return [
            'request_id' => 'required|integer|exists:requests,id',
            'insurance_type' => 'nullable|string',
            'public_expense' => 'nullable|string',
            'responsible_city_district' => 'nullable|string',
            'life_insurance_responsible_name' => 'nullable|string',
            'other_medical_insurance' => 'nullable|string',
        ];
    }
}
