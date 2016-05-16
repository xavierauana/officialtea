<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Queue extends Model
{
    public function members()
    {
        return $this->hasMany(Member::class);
    }
}
