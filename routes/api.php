<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', 'RegisterController@register');
Route::post('login', 'LoginController@login');
Route::post('logout', 'LoginController@logout');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/authenticated', "HomeController@checkAuth");

Route::group([
    'middleware' => 'auth:sanctum'
], function() {
    Route::get('dashdata', "HomeController@dashBoardData");


    Route::resource('items', "ItemController")->middleware('role:admin');
    Route::get('getallitems', "ItemController@getAllItems")->middleware('role:admin|store_executive|employee');
    Route::get('stock', "StoreController@getStock")->middleware('role:admin|store_executive');

    Route::resource('store', "StoreController")->middleware('role:admin|store_executive');
    Route::get('requisition', "StoreController@requisitionIndex")->middleware('role:admin|employee');
    Route::get('pendingrequisition', "StoreController@pendingRequisitionIndex")->middleware('role:admin|store_executive');
    Route::post('requisition', "StoreController@setRequisition")->middleware('role:admin|employee');
});

