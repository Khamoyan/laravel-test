<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use JWTAuthException;
use Exception;

class UserController extends Controller
{
    private function getToken($email, $password)
    {
        $token = null;
        try {
            if (!$token = JWTAuth::attempt(['email' => $email, 'password' => $password])) {
                return response()->json([
                                            'response' => 'error',
                                            'message' => 'Password or email is invalid',
                                            'token' => $token
                                        ]);
            }
        }
        catch (JWTAuthException $e) {
            return response()->json([
                                        'response' => 'error',
                                        'message' => 'Token creation failed',
                                    ]);
        }
        catch(Exception $e) {
            dd('stegh mtav');
        }
        return $token;
    }

    public function login(UserRequest $request)
    {
    
        $user = User::where('email', $request->email)->get()->first();
        if ($user && Hash::check($request->password, $user->password)) {
            $token = $this->getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();
            $response = ['success' => true,
                         'data' => ['id' => $user->id, 'auth_token' => $user->auth_token, 'name' => $user->name,
                                    'email' => $user->email]];
        } else {
            $response = ['success' => false, 'data' => 'Record doesnt exists'];
        }

        return response()->json($response, 201);
    }

    public function register(UserRequest $request)
    {
        $payload = [
            'password' => Hash::make($request->password),
            'email' => $request->email,
            'name' => $request->name,
            'is_admin' => $request->is_admin,
            'auth_token' => '',
        ];

        $user = new User($payload);
        if ($user->save()) {

            $token = $this->getToken($request->email, $request->password);

            if (!is_string($token)) {
                return response()->json(['success' => false, 'data' => 'Token generation failed'], 201);
            }

            $user = User::where('email', $request->email)->get()->first();

            $user->auth_token = $token;

            $user->save();

            $response = ['success' => true,
                         'data' => ['name' => $user->name, 'id' => $user->id, 'email' => $request->email,
                                    'auth_token' => $token]];
        } else {
            $response = ['success' => false, 'data' => 'Couldnt register user'];
        }


        return response()->json($response, 201);
    }

    public function logout(UserRequest $request)
    {
        try {
            JWTAuth::setToken($request->input('auth_token'))->invalidate();
            return response()->json('ok', 200);

        }
        catch (JWTAuthException $e) {
            return response()->json($e);
        }

    }
}
