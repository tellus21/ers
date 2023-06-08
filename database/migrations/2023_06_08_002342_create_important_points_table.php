<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImportantPointsTable extends Migration
{
    public function up()
    {
        Schema::create('important_points', function (Blueprint $table) {
            $table->id();
            $table->string('important_point')->unique();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('important_points');
    }
}
