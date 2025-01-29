<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ordenatu extends Model
{
    //

    protected $fillable=[
        'esaldia',
        'posizioa',
        'id_ariketa',
    ];


    public function ariketa(){
        return $this->belongsTo(ariketa::class, 'id_ariketa', 'id');
    }
}
