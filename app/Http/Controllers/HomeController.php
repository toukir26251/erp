<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function dashBoardData()
    {
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
