<?php

namespace App\Http\Controllers;

use App\Models\argazkia_zuzena;
use Illuminate\Http\Request;

class argazki_zuzenaController extends Controller
{
    //

    public function showAll(){
        $argazkia_zuzenak= Argazkia_zuzena::All();
        return response()->json($argazkia_zuzenak, 200);
    }

    public function show($id){
        if ($argazki_zuzena=Argazkia_zuzena::find($id)){
            return response()->json($argazki_zuzena, 200);
        }
    }   



}
