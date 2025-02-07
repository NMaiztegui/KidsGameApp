<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aukera_zuzena extends Model
{
    protected $fillable=[
        'esaldia',
        'zuzena',
    ];
    public function ariketa()
    {
        return $this->belongsTo(Ariketa::class, 'id_ariketa', 'id');
    }
}
