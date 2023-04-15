<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Insurance extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'request_id',
        'insurance_type',
        'public_expense',
        'responsible_city_district',
        'life_insurance_responsible_name',
        'other_medical_insurance',
    ];

    public function request()
    {
        return $this->belongsTo(Request::class);
    }
}
