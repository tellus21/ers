<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HomeCareClinicNursingHome extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'home_care_clinic_id',
        'nursing_home_id',
        'pickup_time',
    ];

    public function homeCareClinic()
    {
        return $this->belongsTo(HomeCareClinic::class);
    }

    public function nursingHome()
    {
        return $this->belongsTo(NursingHome::class);
    }
}
