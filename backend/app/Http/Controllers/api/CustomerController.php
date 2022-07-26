<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    
    public function searchBrochure(Request $request,$type){
        // dd($brochurename,$name,$publisher);
        if($type=="searchbar"){
            // dd('searchbar');
            $result=Brochur::where('brochure_number','=',$request->brochurename)
            ->orWhere('name','like','%'.$request->name.'%')
            ->orWhere('publisher','=',$request->publisher)
            ->orWhere('category_id','=',$request->category)
            ->orWhere('sub_category_id','=',$request->subCategory)
            ->orWhere('in_showroom','=',$request->inShowroom)
            ->get();
        }
        elseif($type=="publisher"){
            // dd('publisher');
            $result=Brochur::where('publisher','=',$request->publisher)
            ->get();
        }  
        elseif($type=="category"){
            // dd('category');
            $result=Brochur::where('category_id','=',$request->category)
            ->get();
        }
        elseif($type=="subCategory"){
            // dd('subCategory');
            $result=Brochur::where('sub_category_id ','=',$request->subCategory)
            ->get();
        }
        elseif($type=="isShowroom"){
            // dd('isShowroom');
            $result=Brochur::where('in_showroom',$request->inShowroom)
            ->get();
        }
        if(count($result)==0){
            $responce=[
                'status'=>404,
                'message'=>'No Result Found',
                'result'=>$result
            ];
        }else{
            $responce=[
                'status'=>200,
                'message'=>'Brochure Found Successfully',
                'result'=>$result
            ];
        }
        return response()->json($responce,200);
    }
}
