<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeCareClinicNursingHomeTable extends Migration
{
    public function up()
    {
        Schema::create('home_care_clinic_nursing_home', function (Blueprint $table) {
            $table->id();
            $table->foreignId('home_care_clinic_id')->constrained();
            $table->foreignId('nursing_home_id')->constrained();
            $table->string('pickup_time')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('home_care_clinic_nursing_home');
    }
}
