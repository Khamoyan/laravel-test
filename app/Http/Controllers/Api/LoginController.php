<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Services\LoginService;
use JWTAuth;

class LoginController extends Controller
{
    /**
     * Login account with JWT
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */

    public function login(LoginRequest $request, LoginService $login_service)
    {
        $inputs = $request->inputs();
        $credentials = $request->only('email', 'password');
        $response = $login_service->login($inputs, $credentials);
        return response()->json($response, 201);
    }


    /**
     * Logout with JWT
     *
     * @return \Illuminate\Http\Response
     */

    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Logout successful'], 200);
    }

}
