<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoreDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('store_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('store_id');
            $table->unsignedBigInteger('item_id');
            $table->float('price')->default(0.00);
            $table->integer('qnt')->default(0);
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('store_id')->on('stores')->references('id');
            $table->foreign('item_id')->on('items')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('store_details');
    }
}
