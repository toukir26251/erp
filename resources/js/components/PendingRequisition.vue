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
                        url="/api/pendingrequisition"
                        :headers= auth>
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
                },
                {
                    label: 'Requested By',
                    name: 'user.name',
                    orderable: true,
                },
                {
                    label: 'Approved By',
                    name: 'approved_by_user.name',
                    orderable: true,
                },
                {
                    label: 'Done By',
                    name: 'done_by_user.name',
                    orderable: true,
                },
                {
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
            received:[],
            auth:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    },
    mounted(){
        // this.getReceive()
    },
}
</script>
