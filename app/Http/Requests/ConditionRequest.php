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
            'walking_state' => 'required|string',
            'accompaniment' => 'required|string',
            'pickup' => 'required|string',
            'dementia' => 'required|string',
            'oxygen' => 'required|string',
            'oxygen_amount' => 'required|string',
            'allergy' => 'required|string',
            'allergy_content' => 'required|string',
            'infection' => 'required|string',
            'is_hbs_antigen' => 'required|boolean',
            'is_hcv' => 'required|boolean',
            'is_syphilis' => 'required|boolean',
            'is_hiv' => 'required|boolean',
            'is_mrsa' => 'required|boolean',
            'other_infection' => 'required|string',
            'intra_metal' => 'required|string',
            'intra_metal_content' => 'required|string',
            'is_alcohol_prohibiting' => 'required|boolean',
            'is_pace_maker' => 'required|boolean',
            'is_mon' => 'required|boolean',
            'is_tue' => 'required|boolean',
            'is_wed' => 'required|boolean',
            'is_thu' => 'required|boolean',
            'is_fri' => 'required|boolean',
            'diagnosis_day' => 'required|string',
            'surgery_history' => 'required|string',
            'other' => 'required|string',
            'anything_memo' => 'required|string',
        ];
    }
}
