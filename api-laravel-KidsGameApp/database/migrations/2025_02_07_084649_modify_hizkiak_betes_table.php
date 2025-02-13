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
        Schema::table('hizkiak_betes', function (Blueprint $table) {
            //
            $table->renameColumn('hizkia', 'text_hutsunea');
            $table->renameColumn('posizioa', 'text_osoa');
        });
        Schema::table('hizkiak_betes', function (Blueprint $table) {
            //
            $table->string('text_osoa')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('hizkiak_betes', function (Blueprint $table) {
            //
        });
    }
};
