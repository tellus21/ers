<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Insurance extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'order_id',
        'insurance_type',
        'is_old_first',
        'is_disabled_first',
        'is_special_medical_expense',
        'is_old_tax',
        'is_disabled_tax',
        'responsible_city_district',
        'life_insurance_responsible_name',
        'other_medical_insurance',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
