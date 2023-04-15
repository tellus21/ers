<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DepartmentRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string|unique:departments,name',
        ];
    }
}
