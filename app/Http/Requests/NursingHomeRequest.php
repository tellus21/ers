<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NursingHomeRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string',
            'kana' => 'nullable|string',
            'company_name' => 'nullable|string',
            'postal_code' => 'nullable|string',
            'address' => 'nullable|string',
            'phone_number' => 'nullable|string',
            'fax_number' => 'nullable|string',
            'main_contact' => 'nullable|string',
            'sub_contact' => 'nullable|string',
            'pickup_time_lsi' => 'nullable|string',
            'pickup_time_smile' => 'nullable|string',
            'pickup_time_kotoni' => 'nullable|string',
            'pickup_time_kita' => 'nullable|string',
            'pickup_time_kita_highway' => 'nullable|string',
        ];
    }
}
