<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create(
            [
                "name"=>"Admin",
                "email"=>"admin@demo.com",
                "password"=>Hash::make("123456")
            ]
        );
        \App\User::create(
            [
                "name"=>"Store Executive",
                "email"=>"store@demo.com",
                "password"=>Hash::make("123456")
            ]
        );
        \App\User::create(
            [
                "name"=>"Employee",
                "email"=>"emp@demo.com",
                "password"=>Hash::make("123456")
            ]
        );
    }
}
