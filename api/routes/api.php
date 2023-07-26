<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\TypeContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('/client', ClientController::class);
Route::apiResource('/contact', ContactController::class);
Route::apiResource('/type', TypeContactController::class);
