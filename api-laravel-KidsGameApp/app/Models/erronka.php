<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Erronka extends Model
{
    /** @use HasFactory<\Database\Factories\ErronkaFactory> */
    use HasFactory;
    protected $fillable=[
        'azalpena',
        'testu_izkutua',
        'mapa_irudia',
        'testu_izkutua_id'
    ];

    public function ariketa()
    {
        return $this->hasMany(ariketa::class, 'id_erronka', 'id');
    }

    public function audioak(){
        return $this->hasMany(audioa::class, 'id_erronka', 'id');
    }

    public function erantzunak(){
        return $this-> hasMany(erantzunak::class, 'id_erronka', 'id');
    }

    public function lokalizazioa(){
        return $this->hasMany(lokalizazioa::class, 'id_erronka', 'id');
    }
}
