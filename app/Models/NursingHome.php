<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NursingHome extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'kana',
        'company_name',
        'postal_code',
        'address',
        'phone_number',
        'fax_number',
        'main_contact',
        'sub_contact',
        'alert_level',
        'pickup_time_lsi',
        'pickup_time_smile',
        'pickup_time_kotoni',
        'pickup_time_kita',
        'pickup_time_kita_highway',
        'pickup_distance_lsi',
        'pickup_distance_smile',
        'pickup_distance_kotoni',
        'pickup_distance_kita',
        'pickup_distance_kita_highway',
    ];
}
