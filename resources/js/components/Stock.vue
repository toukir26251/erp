<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="float-left">
                        <h4>Stock</h4>
                    </div>
                </div>
                <div class="card-body">
                    <data-table
                        :columns="data_table_columns"
                        url="/api/stock"
                        :headers= auth >
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"stock",
    data(){
        return {
            data_table_columns: [
                {
                    label: 'SL',
                    name: 'id',
                    orderable: true,
                },
                {
                    label: 'Item Name',
                    name: 'item.item_name',
                    orderable: false,
                },
                {
                    label: 'Price',
                    name: 'price',
                    orderable: true,
                },
                {
                    label: 'Total',
                    name: 'tot',
                    orderable: true,
                },
            ],
            items:[],
            auth:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    },
    mounted(){
        // this.getItems()
    },
    methods:{

    }
}
</script>
