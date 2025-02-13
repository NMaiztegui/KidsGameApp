<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ordenatu extends Model
{
    //

    protected $fillable=[
        'esaldia',
        'posizioa',
        'id_erronka',
    ];


    public function erronka(){
        return $this->belongsTo(Erronka::class, 'id_erronka', 'id');
    }
}
