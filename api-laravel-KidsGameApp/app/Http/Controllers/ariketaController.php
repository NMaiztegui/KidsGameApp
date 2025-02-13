<?php

namespace App\Http\Controllers;

use App\Models\ariketa;
use Illuminate\Http\Request;

class AriketaController extends Controller
{
    //

    public function showAll(){
       $ariketak = Ariketa::All();
       return response()->json($ariketak, 200);
    }

    public function show($id){
        if ($ariketa=Ariketa::find($id)){
            return response()->json($ariketa, 200);
        }
    }
}
