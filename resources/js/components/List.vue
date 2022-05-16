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
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Code</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="items.length > 0">
                                <tr v-for="(item,key) in items" :key="key">
                                    <td>{{ item.id }}</td>
                                    <td>{{ item.item_name }}</td>
                                    <td>{{ item.item_code }}</td>
                                    <td>{{ item.price }}</td>
                                    <td>{{ item.item_details }}</td>
                                    <td>
                                        <router-link :to='{name:"editItem",params:{id:item.id}}' class="btn btn-outline-success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link>
                                        <button type="button" @click="deleteItem(item.id)" class="btn btn-outline-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Data Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"categories",
    data(){
        return {
            items:[]
        }
    },
    mounted(){
        this.getItems()
    },
    methods:{
        async getItems(){
            await this.axios.get('/api/items').then(response=>{
                this.items = response.data
            }).catch(error=>{
                console.log(error)
                this.items = []
            })
        },
        deleteItem(id){
            swal({
                title: "Are you sure?",
                text: "This item will be deleted permanently",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    this.axios.delete(`/api/items/${id}`).then(response=> {
                        this.getItems()
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                    })

                } else {
                    swal("Item is safe!");
                }
            });
        }
    }
}
</script>
