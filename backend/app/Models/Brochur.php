<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brochur extends Model
{
    use HasFactory;

    public function users(){
       return $this->belongsTo(User::class);
    }
    public function brochur_pdf(){
        return $this->hasMany('App\Models\brochure_pdf','id','brochure_pdf_id');
    }
}
