<?php

use App\Http\Controllers\Api\ContactsController;
use App\Http\Controllers\Api\PeopleController;
use App\Http\Controllers\Api\TypesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('/people', PeopleController::class);
Route::apiResource('/contacts', ContactsController::class);
Route::apiResource('/types', TypesController::class);
