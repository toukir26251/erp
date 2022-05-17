<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Store extends Model
{
    use SoftDeletes;
    protected $fillable = ['receive_ref','total_price','created_by','type','status','done_by','approved_by'];

    public function details(){
        return $this->hasMany(StoreDetails::class,'store_id','id');
    }
}
