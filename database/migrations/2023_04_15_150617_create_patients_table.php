<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('home_care_clinic_id')->constrained();
            $table->foreignId('home_care_doctor_id')->nullable()->constrained(); //nullの場合もあるのでnullable
            $table->foreignId('nursing_home_id')->constrained();
            $table->string('home_karte_number')->nullable();
            $table->string('exam_karte_number')->nullable();
            $table->string('last_name_kana')->nullable();
            $table->string('first_name_kana')->nullable();
            $table->string('last_name')->nullable();
            $table->string('first_name')->nullable();
            $table->timestamp('birthday')->nullable();
            $table->string('gender')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
