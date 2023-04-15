<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Condition extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'request_id',
        'walking_state',
        'accompaniment',
        'pickup',
        'dementia',
        'oxygen',
        'oxygen_amount',
        'allergy',
        'allergy_content',
        'infection',
        'is_hbs_antigen',
        'is_hcv',
        'is_syphilis',
        'is_hiv',
        'is_mrsa',
        'intra_metal',
        'intra_metal_content',
        'is_alcohol_prohibiting',
        'is_pace_maker',
        'is_mon',
        'is_tue',
        'is_wed',
        'is_thu',
        'is_fri',
        'is_sat',
        'is_sun',
        'diagnosis_day',
        'surgery_history',
        'other',
        'anything_memo',
    ];

    public function request()
    {
        return $this->belongsTo(Request::class);
    }
}
