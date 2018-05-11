<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('welcome');
});

Route::get('/app', function () {
    return view('app');
});

Route::get('/home', 'HomeController@index');

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/companies', 'CompaniesController@index');
Route::post('/companies', 'CompaniesController@store');
Route::get('/companies/{id}', 'CompaniesController@show');
Route::put('/companies/{id}', 'CompaniesController@update');
Route::delete('/companies/{id}', 'CompaniesController@destroy');

Route::get('/employees','EmployeesController@index');
Route::post('/employees','EmployeesController@store');
Route::get('/employees/{id}','EmployeesController@show');
Route::put('/employees/{id}','EmployeesController@update');
Route::delete('/employees/{id}','EmployeesController@destroy');
