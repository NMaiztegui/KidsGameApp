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
        Schema::create('erantzunaks', function (Blueprint $table) {
            $table->id();
            $table->string(column: 'emandako_erantzuna');
            $table->bollean (column: 'zuzena')->default('false');
            $table->unsignedBigInteger('id_erronka');
            $table->foreign('id_erronka')->references('id')->on('erronkas');
            $table->unsignedBigInteger('id_ariketa');
            $table->foreign('id_ariketa')->references('id')->on('ariketas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('erantzunaks');
    }
};
