<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'department_id',
        'login_name',
        'password',
        'last_name',
        'first_name',
        'authority',
        'email_address',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
