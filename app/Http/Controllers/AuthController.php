<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Mockery\Exception;


class AuthController extends Controller
{

    public function __construct(User $user)
    {
        $this->user = $user;

    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $input = $request->all();
        $mail = $input['emil'];
        $password = $input['password'];
        try {
            if (Auth::attempt(['Email' => $mail, 'Password' => $password])) {
                Auth::login($this->user);
                return response()->json(['user' => Auth::user()], 200);

            } else {
                return response()->json(['response' => 'Wrong login or password'], 401);
            }
        }
        catch (Exception $e) {

            return response()->json($e, 401);
        }

    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => "Logout account"], 200);
    }

    public function register(Request $request)
    {
        $input = $request->all();
        $user = User::crete([
                                'name' => $input('name'),
                                'email' => $input('email'),
                                'password' => bcrypt($input('password')),
                                'confirm_token' => md5(time() . str_random(2)),
                            ]);
        try {
            Auth::login($user);
            return response()->json(['user' => Auth::user()], 200);

        }
        catch (Exception $e) {

            return response()->json($e, 401);
        }
    }

}