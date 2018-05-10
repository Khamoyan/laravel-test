<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use JWTAuthException;
use Exception;

class LoginController extends Controller
{
    
    public function login(UserRequest $request)
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

    public function logout(UserRequest $request)
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
