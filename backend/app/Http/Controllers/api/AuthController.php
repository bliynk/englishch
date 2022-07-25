<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator=Validator::make($request->all(),[
            'first_name'=>'required|string',
            'last_name'=>'required|string',
            'email'=>'required|unique:users,email',
            'password'=>'required'
        ]);
        
        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()->all()],422);
        }else{
            $user= User::create([
                'first_name'=>$request->first_name,
                'last_name'=>$request->last_name,
                'email'=>$request->email,
                'password'=> Hash::make($request->password)
            ]);
            $token = $user->createToken('Token')->accessToken;
            $response=[
                'status'=>"done",
                'message'=>'Admin'.$user->first_name.'has been added successfully',
                'accessToken'=>$token,
                'user'=>$user,
            ];
            return response()->json($response,200);
        }
    }
    public function login(Request $request){
        $data=[
            'email'=>$request->email,
            'password'=>$request->password,
        ];
        // dd($data);

        if(Auth::attempt($data)){
            $token= Auth()->user()->createToken('Token')->accessToken;
            $response=[
                'status'=>200,
                'message'=>"Admin is successfully logged in",
                'accessToken'=>$token,
                'user'=>Auth()->user()
            ];
            return response()->json($response,200);
        }
        else{
            return response()->json(['status'=>404,'message'=>'Unauthorized'],401);
        }
    }
    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();
        $response = [
            'status'=>200,
            'message' => 'You have been successfully logged out!'
        ];
        return response()->json($response,200);
    }

    public function editAdmin(Request $request,User $user){
       $validator=Validator::make($request->all(),[
        'first_name'=>'required',
        'last_name'=>'required',
        'email'=>'required|unique:users,email',
        'password'=>'required'
       ]);
       if($validator->fails()){
        return response()->json(['errors'=>$validator->errors()->all()],422);
    }else{
        $user->first_name=$request->first_name;
        $user->last_name=$request->last_name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        $user->save();
        $response=[
            'status'=>200,
            'message'=>'Admin '.$user->first_name.' was successfully edited',
            'user'=>$user,
        ];
        return response()->json($response,200);
    }

    
       

    }

 
}
