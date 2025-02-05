<?php

namespace App\Http\Controllers;

use App\Models\hizkiak_bete;
use Illuminate\Http\Request;

class hizkiak_beteController extends Controller
{
    //
    public function showAll(){
        $ariketak = Hizkiak_bete::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=Hizkiak_bete::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
