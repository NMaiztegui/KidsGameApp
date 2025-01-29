<?php

namespace App\Http\Controllers;

use App\Models\erronka;
use Illuminate\Http\Request;

class erronkaController extends Controller
{
    //
    public function showAll(){
        $ariketak = erronka::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=erronka::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
