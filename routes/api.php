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
// Route::get('/welcome', function () {
//     return view('welcome');
// });

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Auth::routes();
Route::post('register', 'Api\AuthController@register');
Route::post('login', 'Api\AuthController@login');
Route::get('logout', 'Api\AuthController@logout');

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

