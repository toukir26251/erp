<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StoreDetails extends Model
{
    use SoftDeletes;
    protected $fillable = ['store_id','item_id','price','qnt'];
}
