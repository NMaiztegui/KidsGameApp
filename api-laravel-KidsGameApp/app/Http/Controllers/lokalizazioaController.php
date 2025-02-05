<?php

namespace App\Http\Controllers;

use App\Models\lokalizazioa;
use Illuminate\Http\Request;

class lokalizazioaController extends Controller
{
    //
    public function showAll(){
        $ariketak = Lokalizazioa::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=Lokalizazioa::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
