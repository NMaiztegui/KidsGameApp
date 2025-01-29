<?php

namespace App\Http\Controllers;

use App\Models\ariketa;
use Illuminate\Http\Request;

class ariketaController extends Controller
{
    //

    public function showAll(){
       $ariketak = ariketa::All();
       return response()->json($ariketak, 200);
    }

    public function show($id){
        if ($ariketa=ariketa::find($id)){
            return response()->json($ariketa, 200);
        }
    }
}
