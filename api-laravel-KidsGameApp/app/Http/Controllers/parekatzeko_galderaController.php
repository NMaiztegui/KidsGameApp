<?php

namespace App\Http\Controllers;

use App\Models\parekatzeko_galdera;
use Illuminate\Http\Request;

class parekatzeko_galderaController extends Controller
{
    //
    public function showAll(){
        $ariketak = parekatzeko_galdera::All();
        return response()->json($ariketak, 200);
     }
 
     public function show($id){
         if ($ariketa=parekatzeko_galdera::find($id)){
             return response()->json($ariketa, 200);
         }
     }
}
