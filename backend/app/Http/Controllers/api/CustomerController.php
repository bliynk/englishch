<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function searchBrochure($brochurename,$name,$publisher){
        dd($brochurename,$name,$publisher);
    }
}
