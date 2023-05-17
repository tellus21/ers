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
        'karte_number_home',
        'last_name_kana',
        'first_name_kana',
        'last_name',
        'first_name',
        'birthday',
        'gender',
        'karte_number_lsi',
        'karte_number_smile',
        'karte_number_kotoni',
        'karte_number_kita',
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
