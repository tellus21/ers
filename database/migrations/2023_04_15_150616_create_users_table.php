<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            //NGパターン
            // $table->foreignId('home_care_clinic_id')->constrained()->nullable();
            // $table->foreignId('examination_clinic_id')->constrained()->nullable();

            //OKパターン
            $table->foreignId('home_care_clinic_id')->nullable(); //nullの場合もあるのでnullable、外部キー制約はしない
            $table->foreignId('examination_clinic_id')->nullable(); //nullの場合もあるのでnullable、外部キー制約はしない
            $table->string('login_name')->unique();
            $table->string('password');
            $table->string('last_name');
            $table->string('first_name');
            $table->string('authority');
            $table->string('email_address')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
