<?php

namespace App\Services;

use App\User;
use JWTAuth;

class LoginService
{ 
    public function login($inputs,$credentials)
    {
        $token = null;
        if ($token = JWTAuth::attempt($credentials)) {
            $user = User::where('email', $inputs['email'])->get()->first();
            if ($user) {
                $user->auth_token = $token;
                 $user->save();
                $response = ['success' => true,
                                'data' => ['auth_token' => $user->auth_token, 'name' => $user->name]];
             } else {
                 $response = ['success' => false, 'data' => 'Record doesnt exists'];
            }

            return $response;
        }
    }

}
