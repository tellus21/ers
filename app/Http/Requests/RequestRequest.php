<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestRequest extends FormRequest
{
    public function rules()
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'patient_id' => 'required|integer|exists:patients,id',
        ];
    }
}
