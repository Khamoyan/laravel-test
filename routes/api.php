<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/welcome', function () {
    return view('welcome');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth::routes();
Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::get('logout', 'AuthController@logout');

Route::post('employees', 'EmployeesController@store');
Route::get('employees', 'EmployeesController@index');
Route::delete('/employees/{id}','EmployeesController@destroy');
Route::put('/employees/{id}','EmployeesController@update');
Route::get('/employees/{id}','EmployeesController@show');

Route::get('/companies', 'CompaniesController@index');
Route::post('/companies', 'CompaniesController@store');
Route::get('/companies/{id}', 'CompaniesController@show');
Route::put('/companies/{id}', 'CompaniesController@update');
Route::delete('/companies/{id}', 'CompaniesController@destroy');

