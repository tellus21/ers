<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'instruction_id',
        'home_clinic_karte_number',
        'examination_clinic_karte_number',
        'facility_staff',
        'scheduled_confirmation_date',
        'welcoming_time',
        'start_time',
        'return_home_time',
        'accompanist',
        'sender',
        'receiver',
        'fax_sender',
        'transmission_date',
        'number_of_documents_sent',
        'caution_on_the_day'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function instruction()
    {
        return $this->belongsTo(Instruction::class);
    }
}
