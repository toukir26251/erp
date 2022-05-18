<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="float-left">
                        <h4>Store Receives</h4>
                    </div>
                    <div class="float-right">
                        <router-link :to='{name:"storeReceive"}' class="btn btn-outline-primary" title="Add New"><i class="fa fa-plus" aria-hidden="true"></i></router-link>
                    </div>
                </div>
                <div class="card-body">

                    <data-table
                        :columns="data_table_columns"
                        url="/api/store?type=in"
                        :headers= auth>
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    methods:{
        async getReceive(){
            await this.axios.get('/api/store').then(response=>{
                this.received = response.data
            }).catch(error=>{
                console.log(error)
                this.received = []
            })
        }
    }
}
</script>
