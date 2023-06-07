<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InsuranceRequest extends FormRequest
{
    public function rules()
    {
        return [
            'order_id' => 'required|integer|exists:orders,id',
            'insurance_type' => 'nullable|string',
            'is_old_first' => 'required|boolean',
            'is_disabled_first' => 'required|boolean',
            'is_special_medical_expense' => 'required|boolean',
            'is_old_tax' => 'required|boolean',
            'is_disabled_tax' => 'required|boolean',
            'responsible_city_district' => 'nullable|string',
            'life_insurance_responsible_name' => 'nullable|string',
            'other_medical_insurance' => 'nullable|string',
        ];
    }
}
