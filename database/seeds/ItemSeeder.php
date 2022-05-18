<?php

use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataArray = [
            [
                "item_code"=>"10001",
                "item_name"=>"Item 1",
                "price"=>"140",
                "item_details"=>"Test Details",
                "unit"=>"Piece",
            ],
            [
                "item_code"=>"10002",
                "item_name"=>"Item 2",
                "price"=>"174",
                "item_details"=>"Test Details",
                "unit"=>"Box",
            ],
            [
                "item_code"=>"10003",
                "item_name"=>"Item 3",
                "price"=>"850",
                "item_details"=>"Test Details",
                "unit"=>"Piece",
            ]
        ];
        foreach ($dataArray as $data){
            \App\Item::create($data);
        }
    }
}
