<?php

namespace App\Exports;

use App\Models\Brochur;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;


class BrochureExport implements FromCollection ,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function headings(): array
    {
        return [
            '#',
            'Brochure Number',
            'Category_id',
            'sub_category_id',
            'name',
            'date_received',
            'in_showroom',
            'publisher',
            'brochure_pdf_id ',
            'QR_code',
            'created_id ',
            'created_at',
            'updated_at',

            'Date',
        ];
    }
    public function collection()
    {
        return Brochur::all();
    }
   
}
