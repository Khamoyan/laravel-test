<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Mockery\Exception;
use Validator;

class AuthController extends Controller
{
    protected $redirectTo = '/home';

    public function __construct(User $user)
    {
        $this->user = $user;

    }

    public function validation(array $params)
    {
       return Validator::make($params, [
            'name' => 'required|max:20',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|',
        ]);
    }

   

    public function login(Request $request)
    {   
        // $request=$this->validation($request);
        // dd($request->all());
        
        try {
            $input = $request->all();
            $mail = $input['email'];
            $password = $input['password'];
            if (Auth::attempt(['email' => $mail, 'password' => $password])) {
                Auth::login($this->user);
                // dd(Auth::user()->get());
                return response()->json(['user'=>Auth::user()->get()], 200);

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
        $request=$this->validation($input);

        try {        
                $user = User::create([
                    'name' => $input['name'],
                    'email' => $input['email'],
                    'password' => bcrypt($input['password']),
                ]);

            $user->save();
            dd($user);
        
            return response()->json(['user' => $user], 200);
        }
        catch (Exception $e) {
            return response()->json($e, 401);
        }
    }

}