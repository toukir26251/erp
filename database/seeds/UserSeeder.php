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
        $admin = \App\User::create(
            [
                "name"=>"Admin",
                "email"=>"admin@demo.com",
                "password"=>Hash::make("123456")
            ]
        );
        $store_exe = \App\User::create(
            [
                "name"=>"Store Executive",
                "email"=>"store@demo.com",
                "password"=>Hash::make("123456")
            ]
        );
        $emp = \App\User::create(
            [
                "name"=>"Employee",
                "email"=>"emp@demo.com",
                "password"=>Hash::make("123456")
            ]
        );

        $admin->assignRole('admin');
        $store_exe->assignRole('store_executive');
        $emp->assignRole('employee');
    }
}
