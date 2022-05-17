<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="float-left">
                        <h4>Pending Requisitions</h4>
                    </div>
                    <div class="float-right">
                        <router-link :to='{name:"storeReceive"}' class="btn btn-outline-primary" title="Add New"><i class="fa fa-plus" aria-hidden="true"></i></router-link>
                    </div>
                </div>
                <div class="card-body">

                    <data-table
                        :columns="data_table_columns"
                        url="/api/pendingrequisition">
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ApproveButtonComponent from "./buttons/requisitions/ApproveButtonComponent";

export default {
    name:"receive",
    data(){
        return {
            data_table_columns: [
                {
                    label: 'SL',
                    name: 'id',
                    orderable: true,
                },
                {
                    label: 'Date',
                    name: 'date',
                    orderable: true,
                },
                {
                    label: 'Reference',
                    name: 'receive_ref',
                    orderable: true,
                },
                {
                    label: 'Items',
                    name: 'items',
                    orderable: true,
                },
                {
                    label: 'Total',
                    name: 'total_price',
                    orderable: true,
                },
                {
                    label: 'Status',
                    name: 'status',
                    orderable: true,
                },{
                    label: 'Action',
                    name: 'Edit',
                    filterable: false,
                    component: ApproveButtonComponent,
                    event: "click",
                    handler: this.alertMe,
                    classes: {
                        'btn': true,
                        'btn-primary': true,
                        'btn-sm': true,
                    }
                },
            ],
            received:[]
        }
    },
    mounted(){
        // this.getReceive()
    },
}
</script>
