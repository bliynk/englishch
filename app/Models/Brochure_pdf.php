<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brochure_pdf extends Model
{
    use HasFactory;

    public function brochure(){
        return  $this->belongsTo(Brochur::class);
    }
}
