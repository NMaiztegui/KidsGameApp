<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ariketas', function (Blueprint $table) {
            $table->id();
            $table->string('Azalpena');
            $table->unsignedBigInteger('id_erronka');
            $table->foreign('id_erronka')->references('id')->on('erronkas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ariketa');
    }
};
