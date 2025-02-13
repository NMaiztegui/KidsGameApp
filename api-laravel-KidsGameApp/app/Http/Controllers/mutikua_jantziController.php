<?php

namespace App\Http\Controllers;

use App\Models\mutikua_jantzi;
use Illuminate\Http\Request;

class mutikua_jantziController extends Controller
{
    //
    public function showAll(){
        $ariketak = Mutikua_jantzi::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=Mutikua_jantzi::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
