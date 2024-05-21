<?php

use App\Models\Szavak;
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
        Schema::create('szavaks', function (Blueprint $table) {
            $table->id();
            $table->string('angol');
            $table->string('magyar'); 
            $table->foreignId('temaId')->references('id')->on('temas');
            $table->timestamps();
        });

        Szavak::create(['angol' => 'tie', 'magyar' => 'nyakkendő', 'temaId' => 1]); 
        Szavak::create(['angol' => 'skirt', 'magyar' => 'szoknya', 'temaId' => 1]); 
        Szavak::create(['angol' => 'shoes', 'magyar' => 'cipő', 'temaId' => 1]); 
        Szavak::create(['angol' => 'basketball', 'magyar' => 'kosárlabda', 'temaId' => 2]); 
        Szavak::create(['angol' => 'chess', 'magyar' => 'sakk', 'temaId' => 2]);
        Szavak::create(['angol' => 'handball', 'magyar' => 'kézilabda', 'temaId' => 2]);
        Szavak::create(['angol' => 'apple', 'magyar' => 'alma', 'temaId' => 3]);
        Szavak::create(['angol' => 'pear', 'magyar' => 'körte', 'temaId' => 3]);
        Szavak::create(['angol' => 'banana', 'magyar' => 'banán', 'temaId' => 3]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavaks');
    }
};
