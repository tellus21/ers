<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsurancesTable extends Migration
{
    public function up()
    {
        Schema::create('insurances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained();
            $table->string('insurance_type')->nullable();
            $table->boolean('is_old_first')->nullable();
            $table->boolean('is_disabled_first')->nullable();
            $table->boolean('is_special_medical_expense')->nullable();
            $table->boolean('is_old_tax')->nullable();
            $table->boolean('is_disabled_tax')->nullable();
            $table->string('responsible_city_district')->nullable();
            $table->string('life_insurance_responsible_name')->nullable();
            $table->string('other_medical_insurance')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('insurance');
    }
}
