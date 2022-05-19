<?php

namespace App\Http\Controllers;

use App\Store;
use App\StoreDetails;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function dashBoardData()
    {
        $user = auth()->user()->id;
        $roles = User::with('roles')->where('id',$user)->first()->roles;
        $role = $roles[0]->name;
        if($role == "admin" || $role == "store_executive"){
            $totalReceivedItems = StoreDetails::whereHas('store',function ($q){
                $q->where('type','in');
            })->sum('qnt');

            $totalStoreReceived = Store::where('type',"in")->sum('total_price');

            $totalReq = Store::where('type',"out")->count();

            $totalReqAmount = Store::where('type',"out")->sum('total_price');

            return response()->json(["success"=>true,"data"=>[
                "total_item"=>$totalReceivedItems,
                "total_rec_amount"=>$totalStoreReceived,
                "total_req"=>$totalReq,
                "total_req_amount"=>$totalReqAmount,
            ]]);
        }
        if($role == "employee"){

        }
    }

    public function checkAuth() {
        $user = auth()->user();
        if($user){
            $authUser = User::with('roles')->where('id',$user->id)->first();
            return $authUser;
        }
        return false;
    }
}
