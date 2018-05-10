<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use JWTAuthException;
use Exception;

class LoginController extends Controller
{
    
    public function login(LoginRequest $request)
    {
        $token = null;
        $credentials = $request->only('email', 'password');
        try {
            if ($token = JWTAuth::attempt($credentials)) {
                $user = User::where('email', $request->email)->get()->first();
                if ($user) {
                    $user->auth_token = $token;
                    $user->save();
                    $response = ['success' => true,
                                'data' => ['auth_token' => $user->auth_token, 'name' => $user->name]];
                } else {
                    $response = ['success' => false, 'data' => 'Record doesnt exists'];
                }

                return response()->json($response, 201);
             }
                
        }
        catch (JWTAuthException $e) {
            return response()->json(['response' => 'error','message' => 'Token creation failed']);
        }
    }

    public function logout(LoginRequest $request)
    {
        try {
            JWTAuth::setToken($request->input('auth_token'))->invalidate();
            return response()->json(['message'=>'ok'], 200);
        }
        catch (JWTAuthException $e) {
            return response()->json(['response' => $e, 'message' => 'Token creation failed']);
        }

    }
}
