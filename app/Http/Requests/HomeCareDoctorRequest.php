<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HomeCareDoctorRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string',
            'is_retired' => 'required|boolean'
        ];
    }
}
