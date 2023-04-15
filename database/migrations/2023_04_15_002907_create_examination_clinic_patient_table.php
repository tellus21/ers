<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExaminationClinicPatientTable extends Migration
{
    public function up()
    {
        Schema::create('examination_clinic_patient', function (Blueprint $table) {
            $table->id();
            $table->foreignId('examination_clinic_id')->constrained();
            $table->foreignId('patient_id')->constrained();
            $table->string('exam_karte_number');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('examination_clinic_patient');
    }
}
