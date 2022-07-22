<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBrochursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brochurs', function (Blueprint $table) {
            $table->id();
            $table->string('brochure_number')->uniqid();
            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('sub_category_id')->constrained('sub_categories');
            $table->string('name');
            $table->dateTime('date_received');
            $table->boolean('in_showroom')->default(0);
            $table->string('publisher');
            $table->foreignId('brochure_pdf_id')->constrained('brochure_pdfs');
            $table->string('QR_code')->nullable();
            $table->foreignId('created_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brochurs');
    }
}
