<?php

namespace App\Http\Controllers;

use App\Item;
use App\Store;
use App\StoreDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\PersonalAccessToken;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $insertArray = [];
        $getUser = $request->user;

        $items = $request->itemid;

        $totPrice = 0;
        foreach ($items as $key=>$item){
            $price = Item::where('id',$item)->first()->price;
            $totPrice += $price;
            $temp = [
                "item_id"=>$item,
                "price"=>$price,
                "qnt"=>$request['qnt'][$key],
            ];
            $insertArray[] = $temp;
        }

        DB::beginTransaction();

        try {
            $storeId = Store::create([
                "receive_ref" => "rec_" . rand(100, 999) ."_". date("Ymd"),
                "total_price" => $totPrice,
                "created_by" => $getUser
            ]);

            foreach ($insertArray as $key => $item) {
                $insertArray[$key]["store_id"] = $storeId->id;
                $insertArray[$key]["created_at"] = $storeId->created_at;
                $insertArray[$key]["updated_at"] = $storeId->updated_at;
            }

            $storeDetails = StoreDetails::insert($insertArray);

            DB::commit();

            return response()->json(["success"=>true,"message"=>"Received Successfully"]);
        } catch(\Exception $e){
            DB::rollback();

            return response()->json(["success"=>false,"message"=>"Something went wrong"]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function show(Store $store)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function edit(Store $store)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Store $store)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function destroy(Store $store)
    {
        //
    }
}
