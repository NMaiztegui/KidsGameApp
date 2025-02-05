<?php

namespace App\Http\Controllers;

use App\Models\esaldia_bete;
use Illuminate\Http\Request;

class esaldia_beteController extends Controller
{
    //
    public function showAll(){
        $ariketak = Esaldia_bete::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=Esaldia_bete::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
