<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="float-left">
                        <h4>Store Receive</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div v-for="(ind,key) in items.qnt">
                    <div class="row" id="item_add_body">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label>Item</label>
                                <select class="form-control" v-model="items.itemid[key]" v-bind:id="'item_select_'+key">
                                    <option v-for="item in allItems" :value="item.id">{{item.item_name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="form-group">
                                <label>Qnt</label>
                                <input type="text" class="form-control" v-model="items.qnt[key]">
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-2">
                            <button class="btn btn-outline-secondary" @click="addMoreItem()">Add More</button>
                            <button class="btn btn-outline-success" @click="submitReceive()">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            items:{
                    itemid : [],
                    qnt : [1],
                    token: localStorage.getItem('token'),
                    user: localStorage.getItem('user')
                },
            allItems:[]
        }
    },
    mounted() {
        this.getAllItems();
    },
    methods:{
        async addMoreItem(){
            this.items.qnt.push(1);
        },
        async getAllItems(){
            await this.axios.get('/api/getallitems').then(response=>{
                this.allItems = response.data
            }).catch(error=>{
                console.log(error)
                this.allItems = []
            })
        },
        async submitReceive(){
            await this.axios.post('/api/store',this.items).then(response=>{
                // this.$router.push({name:"itemList"})
                swal("Updated!", "Change saved!", "success");
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
