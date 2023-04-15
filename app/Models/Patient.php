<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'home_care_clinic_id',
        'home_care_doctor_id',
        'nursing_home_id',
        'home_karte_number',
        'last_name_kana',
        'first_name_kana',
        'last_name',
        'first_name',
        'birthday',
        'gender',
    ];

    public function homeCareClinic()
    {
        return $this->belongsTo(HomeCareClinic::class);
    }

    public function homeCareDoctor()
    {
        return $this->belongsTo(HomeCareDoctor::class);
    }

    public function nursingHome()
    {
        return $this->belongsTo(NursingHome::class);
    }
}
