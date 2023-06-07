<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeCareDoctorsTable extends Migration
{
    public function up()
    {
        Schema::create('home_care_doctors', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->boolean('is_retired')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('home_care_doctors');
    }
}
