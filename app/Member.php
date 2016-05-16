<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [
      "phone", "numberOfPeople"
    ];
    public function queue()
    {
        return $this->belongsTo(Queue::class);
    }
}
