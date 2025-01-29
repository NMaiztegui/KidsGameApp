<?php

namespace App\Http\Controllers;

use App\Models\audioa;
use Illuminate\Http\Request;

class audioaController extends Controller
{
    //
    public function showAll(){
        $ariketak = audioa::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=audioa::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
