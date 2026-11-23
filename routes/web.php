<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Rutas Visuales — Ecosistemas de México (Sin Base de Datos ni Backend)
|--------------------------------------------------------------------------
*/

Route::view('/', 'ecosistemas')->name('home');
Route::view('/ecosistemas', 'ecosistemas')->name('ecosistemas.index');
