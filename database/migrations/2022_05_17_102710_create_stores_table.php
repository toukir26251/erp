<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->string('receive_ref');
            $table->string('type');
            $table->float('total_price')->default(0.00);
            $table->string('status')->default('pending');
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('approved_by')->nullable();
            $table->unsignedBigInteger('done_by')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('created_by')->on('users')->references('id');
            $table->foreign('approved_by')->on('users')->references('id');
            $table->foreign('done_by')->on('users')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores');
    }
}
