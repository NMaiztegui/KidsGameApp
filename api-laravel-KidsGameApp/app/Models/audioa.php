<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Audioa extends Model
{
    protected $fillable=[
        'id_erronka',
        'id_ariketa',
        'audioa',
    ];

    public function erronka()
    {
        return $this->belongsTo(Erronka::class, 'id_erronka', 'id');
    }

    public function ariketa()
    {
        return $this->belongsTo(Ariketa::class, 'id_ariketa', 'id');
    }
}
