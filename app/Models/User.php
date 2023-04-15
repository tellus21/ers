<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'home_care_clinic_id',
        'examination_clinic_id',
        'login_name',
        'password',
        'last_name',
        'first_name',
        'authority',
        'email_address'
    ];

    public function homeCareClinic()
    {
        return $this->belongsTo(HomeCareClinic::class);
    }

    public function examinationClinic()
    {
        return $this->belongsTo(ExaminationClinic::class);
    }
}
