<?php

namespace App\Http\Controllers;

use App\Models\ordenatu;
use Illuminate\Http\Request;

class ordenatuController extends Controller
{
    //
    public function showAll(){
        $ariketak = ordenatu::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=ordenatu::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
