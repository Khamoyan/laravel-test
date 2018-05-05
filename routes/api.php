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

Route::group(['middleware' => ['jwt.auth', 'api-header']], function () {

    Route::get('/', function () {
        $users = App\User::all();

        $response = ['success' => true, 'data' => $users];
        return response()->json($response, 201);
    });
});

Route::group(['middleware' => 'api-header'], function () {
    Route::post('/register', 'Api\UserController@register');
    Route::post('/login', 'Api\UserController@login');
    Route::post('/logout', 'Api\UserController@logout');

});

//Route::group(['middleware' => 'admin'], function () {
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
//});