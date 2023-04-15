<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExaminationClinicPatient extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'examination_clinic_id',
        'patient_id',
        'exam_karte_number',
    ];

    public function examinationClinic()
    {
        return $this->belongsTo(ExaminationClinic::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
}
