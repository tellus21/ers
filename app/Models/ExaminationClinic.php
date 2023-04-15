<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExaminationClinic extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'abbreviation',
        'postal_code',
        'address',
        'phone_number',
        'fax_number',
    ];
}
