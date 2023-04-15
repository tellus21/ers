<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsuranceTable extends Migration
{
    public function up()
    {
        Schema::create('insurance', function (Blueprint $table) {
            $table->id();
            $table->foreignId('request_id')->constrained();
            $table->string('insurance_type');
            $table->string('public_expense');
            $table->string('responsible_city_district');
            $table->string('life_insurance_responsible_name');
            $table->string('other_medical_insurance');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('insurance');
    }
}
