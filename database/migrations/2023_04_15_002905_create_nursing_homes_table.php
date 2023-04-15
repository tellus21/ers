<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNursingHomesTable extends Migration
{
    public function up()
    {
        Schema::create('nursing_homes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('kana')->nullable();
            $table->string('company_name')->nullable();
            $table->string('postal_code')->nullable();
            $table->text('address')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('fax_number')->nullable();
            $table->string('main_contact')->nullable();
            $table->string('sub_contact')->nullable();
            $table->string('pickup_time')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('nursing_homes');
    }
}
