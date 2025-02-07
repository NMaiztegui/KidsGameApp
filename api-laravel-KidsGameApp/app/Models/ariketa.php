<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ariketa extends Model
{
    //
    protected $fillable=[
        'azalpena',
        'id_erronka',
    ];

    public function erronka()
    {
        return $this->belongsTo(erronka::class, 'id_erronka', 'id');
    }

    public function audioak(){
        return $this->hasMany(audioa::class, 'id_ariketa', 'id');
    }

    public function erantzunak(){
        return $this->hasMany(erantzunak::class, 'id_ariketa', 'id');
    }

    public function ordenatu(){
        return $this->hasMany(ordenatu::class, 'id_ariketa', 'id');
    }
    
    public function aukeraZuzena(){
        return $this->hasMany(Aukera_zuzena::class, 'id_ariketa', 'id');
    }

}
