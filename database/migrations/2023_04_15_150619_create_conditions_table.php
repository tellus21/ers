<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConditionsTable extends Migration
{
    public function up()
    {
        Schema::create('conditions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained();
            $table->string('walking_state')->nullable();
            $table->string('accompaniment')->nullable();
            $table->string('pickup')->nullable();
            $table->string('dementia')->nullable();
            $table->string('oxygen')->nullable();
            $table->string('oxygen_amount')->nullable();
            $table->string('allergy')->nullable();
            $table->string('allergy_content')->nullable();
            $table->string('infection')->nullable();
            $table->boolean('is_hbs_antigen')->nullable();
            $table->boolean('is_hcv')->nullable();
            $table->boolean('is_syphilis')->nullable();
            $table->boolean('is_hiv')->nullable();
            $table->boolean('is_mrsa')->nullable();
            $table->string('other_infection')->nullable();
            $table->string('intra_metal')->nullable();
            $table->string('intra_metal_content')->nullable();
            $table->boolean('is_alcohol_prohibiting')->nullable();
            $table->boolean('is_pace_maker')->nullable();
            $table->boolean('is_mon')->nullable();
            $table->boolean('is_tue')->nullable();
            $table->boolean('is_wed')->nullable();
            $table->boolean('is_thu')->nullable();
            $table->boolean('is_fri')->nullable();
            $table->string('diagnosis_day')->nullable();
            $table->text('surgery_history')->nullable();
            $table->text('other')->nullable();
            $table->text('anything_memo')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('conditions');
    }
}
