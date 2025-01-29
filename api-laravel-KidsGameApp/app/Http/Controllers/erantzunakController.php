<?php

namespace App\Http\Controllers;

use App\Models\erantzunak;
use Illuminate\Http\Request;

class erantzunakController extends Controller
{
    //
    public function showAll(){
        $ariketak = erantzunak::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=erantzunak::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
