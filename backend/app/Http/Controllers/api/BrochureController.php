<?php

namespace App\Http\Controllers\api;

use App\Exports\BrochureExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Controllers\Controller;
use App\Models\Brochur;
use App\Models\Brochure_pdf;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;


class BrochureController extends Controller
{
    public function createBrochure(Request $request){
        // dd(Auth::user());
        $validator=Validator::make($request->all(),[
            'brochure_number'=>"required|unique:brochurs,brochure_number",
            'category'=>'required',
            'sub_category'=>'required',
            'name'=>'required',
            'date_received'=>'required',
            'publisher'=>'required',
            'file'=>'required',
        ]);

        if($validator->fails()){
            $response=[
                'status'=>400,
                'message'=>$validator->errors()->all(),
            ];
            return response()->json($response,200);
        }
        else{
        // Handle file Upload
        if($request->hasFile('file')){

            //Storage::delete('/public/avatars/'.$user->avatar);

            // Get filename with the extension
            $filenameWithExt = $request->file('file')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, Auth::user()->id);

            $path = $request->file('file')->storeAs('public/brochures/'.Auth::user()->id,$filename);

            $pdf=new Brochure_pdf();
            $pdf->title=$filename;
            $pdf->url=$path;
            $pdf->save();

        }

        $brochure= new Brochur();
        $brochure->brochure_number=$request->brochure_number;
        $brochure->category_id=$request->category;
        $brochure->sub_category_id=$request->sub_category;
        $brochure->name=$request->name;
        $brochure->date_received=$request->date_received;
        $brochure->publisher=$request->publisher;
        $brochure->brochure_pdf_id=$pdf->id;
        $brochure->created_id=Auth::user()->id;
        $brochure->save();
        $response=[
            'status'=>200,
            'message'=>'Brochure has been successfully added',
            'brochure'=>$brochure,
        ];
        return response()->json($response,200);
        }
    }
   public function allBrochures(){
        // $brochure=Brochur::with('brochur_pdf')->get();
       $brochure=Brochur::join('brochure_pdfs', 'brochurs.brochure_pdf_id', '=', 'brochure_pdfs.id')
       ->get(['brochurs.*', 'brochure_pdfs.url']);;
        $data=$brochure;
        $responce=[
            'status'=>200,
            'message'=>'fetch all Brochure',
            'data'=>$data
        ];
        return response()->json($responce,200);

    }

    public function editBrochure(Request $request,Brochur $brochur){
        // dd($brochur);
        $validator=Validator::make($request->all(),[
            'brochure_number'=>"required|unique:brochurs,brochure_number",
            'category'=>'required',
            'sub_category'=>'required',
            'name'=>'required',
            'date_received'=>'required',
            'publisher'=>'required',
            'file'=>'required',
        ]);

        if($validator->fails()){
            $response=[
                'status'=>400,
                'message'=>$validator->errors()->all(),
            ];
            return response()->json($response,200);
        }
        else{
        // Handle file Upload
        if($request->hasFile('file')){

            //Storage::delete('/public/avatars/'.$user->avatar);

            // Get filename with the extension
            $filenameWithExt = $request->file('file')->getClientOriginalName();
            //Get just filename
            $filename = pathinfo($filenameWithExt, Auth::user()->id);
            // Get just ext
            // $extension = $request->file('file')->getClientOriginalExtension();
            // Filename to store
            // $fileNameToStore = $filename.'_'.time().'.'.$extension;
            // Upload Image
            $path = $request->file('file')->storeAs('public/brochures/'.Auth::user()->id,$filename);

            $pdf=Brochure_pdf::find($brochur->brochure_pdf_id)->first();
            $pdf->title=$filename;
            $pdf->url=$path;
            $pdf->save();
        }

        $brochur->brochure_number=$request->brochure_number;
        $brochur->category_id=$request->category;
        $brochur->sub_category_id=$request->sub_category;
        $brochur->name=$request->name;
        $brochur->date_received=$request->date_received;
        $brochur->publisher=$request->publisher;
        $brochur->brochure_pdf_id=$pdf->id;
        $brochur->created_id=Auth::user()->id;
        $brochur->save();
        $response=[
            'status'=>200,
            'message'=>'Brochure has been successfully modified',
            "brochure"=>$brochur
        ];
        return response()->json($response,200);
        }
    }

    public function deleteBrochure(Brochur $brochure){
        // dd($brochure);
        $pdf=Brochure_pdf::find($brochure->brochure_pdf_id );
        $brochure->delete();
        $pdf->delete();
        $response=[
            'status'=>200,
            'message'=>'Brochures have been successfully deleted',
        ];
        return response()->json($response,200);
    }

    public function exportBrochure(){

        $brochur=Brochur::get();

        return Excel::download(new BrochureExport, 'brochures.xlsx');
    }
    public function fetchCategory(){
        $category=Category::with('getSubCategory')->get();
        $data=$category;
        $responce=[
            'status'=>200,
            'message'=>'fetch categories',
            'data'=>$data
        ];
        return response()->json($responce,200);
    }
    public function fetchSubCategory(Category $category){
        $subcategory=$category->getSubCategory;
        // dd($subcategory);
        $responce=[
            'status'=>200,
            'message'=>'fetch categories',
            'data'=>$subcategory
        ];
        return response()->json($responce,200);
    }
    public function fetchAllSubCategory(){
        $subcategory=SubCategory::all();
        // dd($subcategory);
        $responce=[
            'status'=>200,
            'message'=>'fetch categories',
            'data'=>$subcategory
        ];
        return response()->json($responce,200);
    }
    public function brochureQR(Brochur $brochure){
            $brochure_id=$brochure->id;

            $qrcode=QrCode::generate('http://127.0.0.1:8000/api/downloadQR/'.$brochure_id);
            Storage::disk('public')->put('qrcode/'.$brochure_id.'.svg', $qrcode);
            $url = 'qrcode/'.$brochure_id.'.svg';
            $brochure->QR_code=$url;
            $brochure->save();
            $response=[
                'status'=>200,
                'message'=>'QR code created successfully',
                'url'=>$url,
            ];
            return response()->json($response,200);
    }

    public function DownloadQR(Brochur $brochure){
        $file=$brochure->brochur_pdf;
        $path=$file[0]->url;
        $responce=[
            'status'=>200,
            'message'=>'QR url generated successfully',
            'url'=>Storage::url($path),
        ];
        return response()->json($responce,200);
    }

    public function oldBrochure(){
        $end = date('Y-m-d H:i:s', strtotime('+1 years'));
        // dd($end);
        $data=Brochur::where('created_at','>=',$end)->get();
        if(count($data)==0){
            $responce=[
                'status'=>404,
                'message'=>"Not Found",
                'data'=>$data
            ];
        }
        else{
            $responce=[
                'status'=>200,
                'message'=>"Old Brochures Found",
                'data'=>$data
            ];
        }

        return response()->json($responce,200);


    }

    public function editCategory(Request $request,Category $category){
       
         $category->description=$request->description; 
         $category->save();
         $response=[
             'status'=>200,
             'message'=>' Category was successfully edited',
             'data'=>$category,
         ];
         return response()->json($response,200);
     
 
     }

     public function editSubCategory(Request $request,SubCategory $category){
        $category->description=$request->description; 
        $category->category_id=$request->category_id; 
         $category->save();
         $response=[
             'status'=>200,
             'message'=>' Sub Category was successfully edited',
             'data'=>$category,
         ];
         return response()->json($response,200);
     
     
 
     }

}

