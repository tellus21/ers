<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    public function rules()
    {
        return [
            'department_id' => 'required|integer|exists:departments,id',
            'login_name' => 'required|string|unique:users,login_name',
            'password' => 'required|string',
            'last_name' => 'required|string',
            'first_name' => 'required|string',
            'authority' => 'required|string',
            'email_address' => 'nullable|string|email',
        ];
    }
}
