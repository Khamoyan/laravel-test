<?php

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

Route::post('/login', 'Api\LoginController@login');
Route::get('/logout', 'Api\LoginController@logout');

Route::group(['middleware' => ['before' => 'jwt.auth']], function () {
    Route::get('/employees', 'Api\EmployeesController@index');
    Route::post('employees', 'Api\EmployeesController@store');
    Route::get('/employees/{id}', 'Api\EmployeesController@show');
    Route::put('/employees/{id}', 'Api\EmployeesController@update');
    Route::delete('/employees/{id}', 'Api\EmployeesController@destroy');

    Route::get('/companies', 'Api\CompaniesController@index');
    Route::post('/companies', 'Api\CompaniesController@store');
    Route::get('/companies/{id}', 'Api\CompaniesController@show');
    Route::put('/companies/{id}', 'Api\CompaniesController@update');
    Route::delete('/companies/{id}', 'Api\CompaniesController@destroy');
});
