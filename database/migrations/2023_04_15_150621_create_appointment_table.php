<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentTable extends Migration
{
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('instruction_id')->constrained();
            $table->string('home_clinic_karte_number')->nullable();
            $table->string('examination_clinic_karte_number')->nullable();
            $table->string('facility_staff')->nullable();
            $table->string('scheduled_confirmation_date')->nullable();
            $table->string('welcoming_time')->nullable();
            $table->string('start_time')->nullable();
            $table->string('return_home_time')->nullable();
            $table->string('accompanist')->nullable();
            $table->string('sender')->nullable();
            $table->string('receiver')->nullable();
            $table->string('fax_sender')->nullable();
            $table->string('transmission_date')->nullable();
            $table->integer('number_of_documents_sent')->nullable();
            $table->text('caution_on_the_day')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
