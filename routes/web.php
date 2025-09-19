<?php

use Illuminate\Support\Facades\Route;

Route::view('/{uri}', 'index')->where('uri', '.*')->name('index');
