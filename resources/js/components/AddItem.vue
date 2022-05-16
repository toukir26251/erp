<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="float-left">
                        <h4>Items</h4>
                    </div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="item.itemname">
                                </div>
                            </div>
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Code</label>
                                    <input type="text" class="form-control" v-model="item.itemcode">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="item.itemdetails">
                                </div>
                            </div>
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Price</label>
                                    <input type="text" class="form-control" v-model="item.itemprice">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"additem",
    data(){
        return {
            item:{
                itemname:'',
                itemcode:'',
                itemdetails:'',
                itemprice:''
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/items',this.item).then(response=>{
                this.$router.push({name:"itemList"})
                swal("Updated!", "Change saved!", "success");
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
