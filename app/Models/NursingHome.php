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
        'pickup_time',
    ];
}
