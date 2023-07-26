<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\TypeContactController;
use Illuminate\Support\Facades\Route;


Route::apiResource('/client', ClientController::class);
Route::apiResource('/contact', ContactController::class);
Route::apiResource('/type', TypeContactController::class);
