<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConditionRequest extends FormRequest
{
    public function rules()
    {
        return [
            'request_id' => 'required|integer|exists:requests,id',
            'id' => 'required|integer',
            'walking_state' => 'nullable|string',
            'accompaniment' => 'nullable|string',
            'pickup' => 'nullable|string',
            'dementia' => 'nullable|string',
            'oxygen' => 'nullable|string',
            'oxygen_amount' => 'nullable|string',
            'allergy' => 'nullable|string',
            'allergy_content' => 'nullable|string',
            'infection' => 'nullable|string',
            'is_hbs_antigen' => 'required|boolean',
            'is_hcv' => 'required|boolean',
            'is_syphilis' => 'required|boolean',
            'is_hiv' => 'required|boolean',
            'is_mrsa' => 'required|boolean',
            'other_infection' => 'nullable|string',
            'intra_metal' => 'nullable|string',
            'intra_metal_content' => 'nullable|string',
            'is_alcohol_prohibiting' => 'required|boolean',
            'is_pace_maker' => 'required|boolean',
            'is_mon' => 'required|boolean',
            'is_tue' => 'required|boolean',
            'is_wed' => 'required|boolean',
            'is_thu' => 'required|boolean',
            'is_fri' => 'required|boolean',
            'diagnosis_day' => 'nullable|string',
            'surgery_history' => 'nullable|string',
            'other' => 'nullable|string',
            'anything_memo' => 'nullable|string',
        ];
    }
}
