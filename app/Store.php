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

    public function user(){
        return $this->belongsTo(User::class,'created_by','id');
    }

    public function approved_by_user(){
        return $this->belongsTo(User::class,'approved_by','id');
    }

    public function done_by_user(){
        return $this->belongsTo(User::class,'done_by','id');
    }
}
