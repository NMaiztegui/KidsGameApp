<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lokalizazioa extends Model
{
    /** @use HasFactory<\Database\Factories\LokalizazioaFactory> */
    use HasFactory;

    protected $fillable=[
        'lat',
        'alt',
        'tokia_izena',
        'id_erronka',
        

    ];

    public function erronka()
    {
        return $this->belongsTo(erronka::class, 'id_erronka', 'id');
    }
}
