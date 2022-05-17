<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StoreDetails extends Model
{
    use SoftDeletes;
    protected $fillable = ['store_id','item_id','price','qnt'];

    public function item(){
        return $this->belongsTo(Item::class,'item_id','id');
    }

    public function store(){
        return $this->belongsTo(Store::class,'store_id','id');
    }
}
