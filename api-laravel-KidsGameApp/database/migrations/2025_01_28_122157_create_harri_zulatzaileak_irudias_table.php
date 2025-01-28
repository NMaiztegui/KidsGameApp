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
        Schema::create('harri_zulatzaileak_irudias', function (Blueprint $table) {
            $table->id();
            $table->string(column: 'url');
            $table->boolean(column: 'zuzena');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('harri_zulatzaileak_irudias');
    }
};
