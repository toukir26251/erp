<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $length = $request->input('length');
        $sortBy = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');

//        $query = Item::eloquentQuery($sortBy, $orderBy, $searchValue);
        $query = Item::where('item_code', 'LIKE', '%'.$searchValue.'%')->orWhere('item_name', 'LIKE', '%'.$searchValue.'%')->orderBy($sortBy, $orderBy);
        $items = $query->paginate($length);

        return new DataTableCollectionResource($items);

//        $items = Item::get();
//        return response()->json($items);
    }

    public function getAllItems(){
        $items = Item::get();
        return response()->json($items);
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
        $request->validate([
            'itemname' => ['required'],
            'itemprice' => ['required'],
            'itemcode' => ['required'],
        ]);

        $item = Item::create([
            "item_code" => $request->itemcode,
            "item_name" => $request->itemname,
            "item_details" => $request->itemdetails,
            "unit" => $request->itemunit,
            "price" => $request->itemprice
        ]);

        if($item) {
            return response()->json(["success" => true, "message" => "Saved Successfully"]);
        }
        else{
            return response()->json(["success"=>false,"message"=>"Something went wrong!"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function show($item)
    {
        $item = Item::where("id",$item)->first();

        if($item){
            return response()->json(["success"=>true,"data"=>[
                    "itemname"=>$item->item_name,
                    "itemcode"=>$item->item_code,
                    "itemdetails"=>$item->item_details,
                    "itemprice"=>$item->price,
                    "itemunit"=>$item->unit,
                ]
            ]);
        }else{
            return response()->json(["success"=>false,"message"=>"Something went wrong!"]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function edit(Item $item)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $item)
    {
        $request->validate([
            'itemname' => ['required'],
            'itemprice' => ['required'],
            'itemcode' => ['required'],
        ]);

        $item = Item::where('id',$item)->update([
            "item_code" => $request->itemcode,
            "item_name" => $request->itemname,
            "item_details" => $request->itemdetails,
            "price" => $request->itemprice,
            "unit" => $request->itemunit
        ]);

        if($item) {
            return response()->json(["success" => true, "message" => "Saved Successfully"]);
        }
        else{
            return response()->json(["success"=>false,"message"=>"Something went wrong!"]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy($item)
    {
        Item::where('id',$item)->delete();
        return response()->json([
            "success"=>true,
            'message'=>'Deleted Successfully!!'
        ]);
    }
}
