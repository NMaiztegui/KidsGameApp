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
        Schema::create('lokalizazioas', function (Blueprint $table) {
            $table->id();
            $table->integer('lat');
            $table->integer('alt');
            $table->string('tokia_izena');
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
        Schema::dropIfExists('lokalizazioas');
    }
};
