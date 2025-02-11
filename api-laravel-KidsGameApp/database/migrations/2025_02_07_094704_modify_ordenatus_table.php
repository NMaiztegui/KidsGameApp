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
        Schema::table('ordenatus', function (Blueprint $table) {
            //
            $table->renameColumn('id_ariketa', 'id_erronka');
            
            $table->foreign('id_erronka')->references('id')->on('erronkas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ordenatus', function (Blueprint $table) {
            //
        });
    }
};
