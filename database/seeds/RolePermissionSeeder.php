<?php

use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = \Spatie\Permission\Models\Role::create([
            "name"=>"admin",
            "guard_name"=>"web",
        ]);
        $store_executive = \Spatie\Permission\Models\Role::create([
            "name"=>"store_executive",
            "guard_name"=>"web",
        ]);
        $employee = \Spatie\Permission\Models\Role::create([
            "name"=>"employee",
            "guard_name"=>"web",
        ]);
    }
}
