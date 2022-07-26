<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;

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
            return response()->json(['status'=>400,'errors'=>$validator->errors()->all()],200);
        }else{
            $user= User::create([
                'first_name'=>$request->first_name,
                'last_name'=>$request->last_name,
                'email'=>$request->email,
                'password'=> Hash::make($request->password)
            ]);
            $token = $user->createToken('Token')->accessToken;
            $response=[
                'status'=>200,
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
            return response()->json(['status'=>404,'message'=>'Unauthorized'],200);
        }
    }
    public function logout (Request $request) {
        // $token = $request->user()->token();
        // $token->revoke();

        $user=Auth::user();
        $tokens =  $user->tokens->pluck('id');
        Token::whereIn('id', $tokens)
            ->update(['revoked'=> true]);
        RefreshToken::whereIn('access_token_id', $tokens)->update(['revoked' => true]);
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
        return response()->json(['status'=>400,'errors'=>$validator->errors()->all()],200);
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

    public function searchAdmin(Request $request){
        $validator=Validator::make($request->all(),[
            'email'=>'required'
        ]);
        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()->all()],200);
        }
        else{
            $admin=User::where('email','like','%' . $request->email . '%')->get();
            if($admin){
                $responce=[
                    'status'=>200,
                    'message'=>'Admin founded successfully',
                    'data'=>$admin
                ];
            }
            else{
                $responce=[
                    'status'=>404,
                    'message'=>'Admin not found',
                    'data'=>$admin
                ];
            }
        }
        return response()->json($responce,200);
    }
    public function fetchAdmin(){
        $admin=User::all();
        if($admin!=null){
            $responce=[
                'status'=>200,
                'message'=>"All admin get successfully",
                'data'=>$admin
                
            ];
        }
        else{
            $responce=[
                'status'=>404,
                'message'=>"Not Found",
                'data'=>$admin
            ];
        }

        return response()->json($responce,200);
    }
 


}
