<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class importantPointRequest extends FormRequest
{
    public function rules()
    {
        return [
            'important_point' => 'required|string',
        ];
    }
}
