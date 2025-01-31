<?php

namespace App\Http\Controllers;

use App\Models\aukera_zuzena;
use Illuminate\Http\Request;

class aukera_zuzenaController extends Controller
{
    //
    public function showAll(){
        $ariketak = Aukera_zuzena::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=Aukera_zuzena::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
