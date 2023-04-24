<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestRequest extends FormRequest
{
    public function rules()
    {
        return [
            'user_id' => 'required|integer|exists:users,id',

            // NGパターン
            // 'patient_id' => 'required|integer|exists:patients,id',

            //OKパターン
            'patient_id' => 'integer|nullable|exists:patients,id',
        ];
    }
}
