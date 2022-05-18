<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                <div class="float-left">
                    <h4>Items</h4>
                </div>
                <div class="float-right">
                    <router-link :to='{name:"additem"}' class="btn btn-outline-primary" title="Add New"><i class="fa fa-plus" aria-hidden="true"></i></router-link>
                </div>
                </div>
                <div class="card-body">
<!--                    <div class="table-responsive">-->
<!--                        <table class="table table-bordered">-->
<!--                            <thead>-->
<!--                                <tr>-->
<!--                                    <th>ID</th>-->
<!--                                    <th>Name</th>-->
<!--                                    <th>Code</th>-->
<!--                                    <th>Price</th>-->
<!--                                    <th>Description</th>-->
<!--                                    <th>Actions</th>-->
<!--                                </tr>-->
<!--                            </thead>-->
<!--                            <tbody v-if="items.length > 0">-->
<!--                                <tr v-for="(item,key) in items" :key="key">-->
<!--                                    <td>{{ item.id }}</td>-->
<!--                                    <td>{{ item.item_name }}</td>-->
<!--                                    <td>{{ item.item_code }}</td>-->
<!--                                    <td>{{ item.price }}</td>-->
<!--                                    <td>{{ item.item_details }}</td>-->
<!--                                    <td>-->
<!--                                        <router-link :to='{name:"editItem",params:{id:item.id}}' class="btn btn-outline-success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link>-->
<!--                                        <button type="button" @click="deleteItem(item.id)" class="btn btn-outline-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>-->
<!--                                    </td>-->
<!--                                </tr>-->
<!--                            </tbody>-->
<!--                            <tbody v-else>-->
<!--                                <tr>-->
<!--                                    <td colspan="4" align="center">No Data Found.</td>-->
<!--                                </tr>-->
<!--                            </tbody>-->
<!--                        </table>-->
<!--                    </div>-->

                    <data-table
                        :columns="data_table_columns"
                        url="/api/items"
                        :headers= auth>
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EditButtonComponent from "./buttons/items/EditButtonComponent";
export default {
    name:"items",
    data(){
        return {
            data_table_columns: [
                {
                    label: 'SL',
                    name: 'id',
                    orderable: true,
                },
                {
                    label: 'Name',
                    name: 'item_name',
                    orderable: true,
                },
                {
                    label: 'Unit',
                    name: 'unit',
                    orderable: true,
                },
                {
                    label: 'Code',
                    name: 'item_code',
                    orderable: true,
                },
                {
                    label: 'Description',
                    name: 'item_details',
                    orderable: true,
                },
                {
                    label: 'Action',
                    name: 'Edit',
                    filterable: false,
                    component: EditButtonComponent,
                    event: "click",
                    handler: this.alertMe,
                    classes: {
                        'btn': true,
                        'btn-primary': true,
                        'btn-sm': true,
                    }
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
        async getItems(){
            await this.axios.get('/api/items').then(response=>{
                this.items = response.data
            }).catch(error=>{
                console.log(error)
                this.items = []
            })
        }
    }
}
</script>
