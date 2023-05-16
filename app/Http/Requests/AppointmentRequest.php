<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentRequest extends FormRequest
{
    public function rules()
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'instruction_id' => 'required|integer|exists:instructions,id',
            'home_clinic_karte_number' => 'nullable|string',
            'examination_clinic_karte_number' => 'nullable|string',
            'facility_staff' => 'nullable|string',
            'scheduled_confirmation_date' => 'nullable|string',
            'welcoming_time' => 'nullable|string',
            'start_time' => 'nullable|string',
            'return_home_time' => 'nullable|string',
            'accompanist' => 'nullable|string',
            'sender' => 'nullable|string',
            'receiver' => 'nullable|string',
            'fax_sender' => 'nullable|string',
            'transmission_date' => 'nullable|string',
            'number_of_documents_sent' => 'nullable|integer',
            'caution_on_the_day' => 'nullable|string',
        ];
    }
}
