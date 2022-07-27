<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\BrochureController;
use App\Http\Controllers\api\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


    Route::post('login',[AuthController::class,'login'])->name('Login');

    Route::middleware('auth:api')->group(function(){
        Route::post('add-admin',[AuthController::class,'register'])->name('Register');
        Route::post('search-admin/',[AuthController::class,'searchAdmin'])->name('SearchAdmin');
        Route::post('edit-admin/{user}',[AuthController::class,'editAdmin'])->name('editAdmin');
        Route::post('logout-user',[AuthController::class,'logout'])->name('Logout');
        Route::post('fetch-admin',[AuthController::class,'fetchAdmin'])->name('FetchAdmin');


        // brochure routes
        Route::post('add-brochure',[BrochureController::class,'createBrochure'])->name('CreateBrochure');
        Route::post('edit-brochure/{brochure}',[BrochureController::class,'editBrochure'])->name('EditBrochure');
        Route::post('delete-brochure/{brochure}',[BrochureController::class,'deleteBrochure'])->name('DeleteBrochure');
        Route::get('exportBrochure',[BrochureController::class,'exportBrochure'])->name('exportBrochure');
        Route::post('get-brochureQR/{brochure}',[BrochureController::class,'brochureQR'])->name('BrochureQR');
        Route::post('oldBrochure/',[BrochureController::class,'oldBrochure'])->name('OldBrochure');

        // fetch api
        // cateogry
        Route::post('fetch-category',[BrochureController::class,'fetchCategory'])->name('FetchCategory');
        // subCategory
        Route::get('fetch-sub-category/{category}',[BrochureController::class,'fetchSubCategory'])->name('FetchSubCategory');

    });
    Route::get('downloadQR/{brochure}',[BrochureController::class,'DownloadQR'])->name('DownloadQR');

    // customer api routes
    Route::post('search-brochure/{type}',[CustomerController::class,'searchBrochure'])->name('SearchBrochure');
    Route::post('sort-brochure/',[CustomerController::class,'sortBrochure'])->name('SortBrochure');
    Route::post('fetch-counter-data/',[CustomerController::class,'fetchDataCount'])->name('FetchDataCount');

    Route::post('fetch-brochureCount/',[CustomerController::class,'fetchBrochureCount'])->name('FetchBrochureCount');
    Route::post('fetch-brochureInShowroom/',[CustomerController::class,'brochureInShowroom'])->name('BrochureInShowroom');
    Route::post('fetch-oldBrochureCheck/',[CustomerController::class,'oldBrochureCheck'])->name('OldBrochureCheck');


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
