<?php

namespace App\Http\Controllers;

use App\Models\funikularra;
use Illuminate\Http\Request;

class funikularraController extends Controller
{
    //
    public function showAll(){
        $ariketak = Funikularra::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=Funikularra::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
