<?php

use App\Http\Controllers\argazki_zuzenaController;
use App\Http\Controllers\ariketaController;
use App\Http\Controllers\audioaController;
use App\Http\Controllers\aukera_zuzenaController;
use App\Http\Controllers\erantzunakController;
use App\Http\Controllers\erronkaController;
use App\Http\Controllers\esaldia_beteController;
use App\Models\erantzunak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/argazki-zuzena',[argazki_zuzenaController::class,'showAll']);
Route::get('/argazki-zuzena/{id}',[argazki_zuzenaController::class,'show']);

Route::get('/ariketak',[ariketaController::class, 'showAll']);
Route::get('/ariketak/{id}',[ariketaController::class, 'show']);

Route::get('/audioak',[audioaController::class, 'showAll']);
Route::get('/audioak/{id}',[audioaController::class, 'show']);

Route::get('/aukera-zuzena',[aukera_zuzenaController::class,'showAll']);
Route::get('/aukera-zuzena/{id}',[aukera_zuzenaController::class,'show']);

Route::get('/erantzunak', [erantzunakController::class, 'showAll']);
Route::get('/erantzunak/{id}', [erantzunakController::class, 'show']);

Route::get('/erronkak', [erronkaController::class, 'showAll']);
Route::get('/erronkak/{id}', [erronkaController::class, 'show']);

Route::get('/esaldia-bete', [esaldia_beteController::class, 'showAll']);
Route::get('/esaldia-bete/{id}', [esaldia_beteController::class, 'show']);