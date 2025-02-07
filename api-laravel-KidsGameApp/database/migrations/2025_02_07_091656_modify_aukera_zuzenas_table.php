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
        Schema::table('aukera_zuzenas', function (Blueprint $table) {
            //
            $table->unsignedBigInteger('id_ariketa');
            
            $table->foreign('id_ariketa')->references('id')->on('ariketas');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('aukera_zuzenas', function (Blueprint $table) {
            //
        });
    }
};
