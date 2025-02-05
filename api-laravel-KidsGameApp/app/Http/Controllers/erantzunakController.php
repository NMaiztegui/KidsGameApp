<?php

namespace App\Http\Controllers;

use App\Models\erantzunak;
use Illuminate\Http\Request;

class erantzunakController extends Controller
{
    //
    public function showAll(){
        $ariketak = Erantzunak::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=Erantzunak::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
