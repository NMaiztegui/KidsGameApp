<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class erantzunak extends Model
{
    protected $fillable=[
        'emandako_erantzuna',
        'zuzena',
        'id_erronka',
        'id_ariketa',

    ];

    public function erronka()
    {
        return $this->belongsTo(erronka::class, 'id_erronka', 'id');
    }
    public function ariketa()
    {
        return $this->belongsTo(ariketa::class, 'id_ariketa', 'id');
    }
}
