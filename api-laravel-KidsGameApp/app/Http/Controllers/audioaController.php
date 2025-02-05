<?php

namespace App\Http\Controllers;

use App\Models\audioa;
use Illuminate\Http\Request;

class AudioaController extends Controller
{
    //
    public function showAll(){
        $ariketak = Audioa::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=Audioa::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
