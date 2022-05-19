<?php

namespace App\Http\Controllers;

use App\Item;
use App\Store;
use App\StoreDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;
use Laravel\Sanctum\PersonalAccessToken;

class StoreController extends Controller
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
        $query = Store::with("details.item")->where('type','in')->where(function ($query) use($searchValue){
            $query->where('receive_ref', 'LIKE', '%'.$searchValue.'%')->orWhere('created_at', 'LIKE', '%'.$searchValue.'%');
        })->orderBy($sortBy, $orderBy);
        $data = $query->paginate($length);

        foreach($data as $key=> $d){
            $newtime = strtotime($d->created_at);
            $data[$key]->date = date('d-m-Y',$newtime);
            $items = [];
            $data[$key]->items = "";
            foreach ($d->details as $key1=>$row){
                $items[] = $row->item->item_name." : ".abs($row->qnt)." | ".$row->price." BDT";
            }
            $data[$key]->items = implode(" , ",$items);
        }

        return new DataTableCollectionResource($data);
    }

    public function requisitionIndex(Request $request)
    {
        $userRoles = Auth::user()->roles()->get();
        $userRoles = $userRoles[0];
        $role = $userRoles->name;

        $length = $request->input('length');
        $sortBy = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');

//        $query = Item::eloquentQuery($sortBy, $orderBy, $searchValue);
        if($role == "admin"){
            $query = Store::with("details.item","user","approved_by_user","done_by_user")->where('type','out')->where(function ($query) use($searchValue){
                $query->where('receive_ref', 'LIKE', '%'.$searchValue.'%')->orWhere('created_at', 'LIKE', '%'.$searchValue.'%')->orWhere('status','LIKE','%'.$searchValue.'%');
            })->orderBy($sortBy, $orderBy);
            $data = $query->paginate($length);
        }
        else{
            $query = Store::with("details.item","user","approved_by_user","done_by_user")->where('type','out')->where(function ($query) use($searchValue){
                $query->where('receive_ref', 'LIKE', '%'.$searchValue.'%')->orWhere('created_at', 'LIKE', '%'.$searchValue.'%');
            })->where('created_by',Auth::user()->id)->orderBy($sortBy, $orderBy);
            $data = $query->paginate($length);
        }


        foreach($data as $key=> $d){
            $newtime = strtotime($d->created_at);
            $data[$key]->date = date('d-m-Y',$newtime);
            $items = [];
            $data[$key]->items = "";
            foreach ($d->details as $key1=>$row){
                $items[] = $row->item->item_name." : ".abs($row->qnt)." | ".$row->price." BDT";
            }
            $data[$key]->items = implode(" , ",$items);
        }

        return new DataTableCollectionResource($data);
    }

    public function pendingRequisitionIndex(Request $request)
    {
        $userRoles = Auth::user()->roles()->get();
        $userRoles = $userRoles[0];
        $role = $userRoles->name;
        $statusToCheck = ($role == 'admin') ? "pending" : "approved";

        $length = $request->input('length');
        $sortBy = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');

//        $query = Item::eloquentQuery($sortBy, $orderBy, $searchValue);
        $query = Store::with("details.item","user","approved_by_user","done_by_user")->where(['type'=>'out','status'=>$statusToCheck])->where(function ($query) use($searchValue){
            $query->where('receive_ref', 'LIKE', '%'.$searchValue.'%')->orWhere('created_at', 'LIKE', '%'.$searchValue.'%');
        })->orderBy($sortBy, $orderBy);
        $data = $query->paginate($length);

        foreach($data as $key=> $d){
            $newtime = strtotime($d->created_at);
            $data[$key]->date = date('d-m-Y',$newtime);
            $items = [];
            $data[$key]->items = "";
            foreach ($d->details as $key1=>$row){
                $items[] = $row->item->item_name." : ".abs($row->qnt)." | ".$row->price." BDT";
            }
            $data[$key]->items = implode(" , ",$items);
        }

        return new DataTableCollectionResource($data);
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
        $getUser = Auth::user()->id;

        $items = $request->itemid;

        $totPrice = 0;
        foreach ($items as $key=>$item){
            $price = Item::where('id',$item)->first()->price;
            $totPrice += $price*$request['qnt'][$key];
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
                "receive_ref" => "store_in_". date("Ymd").rand(1000, 9999),
                "total_price" => $totPrice,
                "created_by" => $getUser,
                "type"=>"in",
                "status"=>"done",
                "approved_by"=>$getUser,
                "done_by"=>$getUser
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
    public function update(Request $request, $store)
    {
        $stat = $request->status;

        if($stat == 'approved' || $stat == 'rejected')
            Store::where('id',$store)->update([
                "status"=>$stat,
                "approved_by"=>Auth::user()->id
            ]);
        if($stat == 'done')
            Store::where('id',$store)->update([
                "status"=>$stat,
                "done_by"=>Auth::user()->id
            ]);

        return response()->json(['success'=>true,"message"=>"Done"]);
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

    public function getStock(Request $request){
        $length = $request->input('length');
        $sortBy = $request->input('column');
        $orderBy = $request->input('dir');
        $searchValue = $request->input('search');

//        $query = Item::eloquentQuery($sortBy, $orderBy, $searchValue);
        $query = StoreDetails::with("item","store")->whereHas("item",function($query) use($searchValue){
            $query->where('item_name','like','%'.$searchValue.'%');
        })->whereHas("store",function($query){
            $query->where('status','=','done');
        })->orderBy($sortBy, $orderBy)->groupBy('item_id')->select("*",DB::raw("SUM(qnt) as tot"))->orderBy($sortBy, $orderBy);
        $data = $query->paginate($length);

//        foreach($data as $key=> $d){
//            $newtime = strtotime($d->created_at);
//            $data[$key]->date = date('d-m-Y',$newtime);
//            $items = [];
//            $data[$key]->items = "";
//            foreach ($d->details as $key1=>$row){
//                $items[] = $row->item->item_name." : ".$row->qnt." | ".$row->price." BDT";
//            }
//            $data[$key]->items = implode(" , ",$items);
//        }

        return new DataTableCollectionResource($data);
    }

    public function setRequisition(Request $request){
        $insertArray = [];
        $getUser = Auth::user()->id;

        $items = $request->itemid;

        $totPrice = 0;
        foreach ($items as $key=>$item){
            $price = Item::where('id',$item)->first()->price;
            $totPrice += $price*$request['qnt'][$key];
            $temp = [
                "item_id"=>$item,
                "price"=>$price,
                "qnt"=>-$request['qnt'][$key],
            ];
            $insertArray[] = $temp;
        }

        DB::beginTransaction();

        try {
            $storeId = Store::create([
                "receive_ref" => "store_out_". date("Ymd").rand(1000, 9999),
                "total_price" => $totPrice,
                "created_by" => $getUser,
                "type"=>"out",
                "status"=>"pending",
            ]);

            foreach ($insertArray as $key => $item) {
                $insertArray[$key]["store_id"] = $storeId->id;
                $insertArray[$key]["created_at"] = $storeId->created_at;
                $insertArray[$key]["updated_at"] = $storeId->updated_at;
            }

            $storeDetails = StoreDetails::insert($insertArray);

            DB::commit();

            return response()->json(["success"=>true,"message"=>"Requisition Submitted Successfully"]);
        } catch(\Exception $e){
            DB::rollback();

            return response()->json(["success"=>false,"message"=>"Something went wrong"]);
        }
    }
}
