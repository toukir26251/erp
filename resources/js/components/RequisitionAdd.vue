<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="float-left">
                        <h4>Create Requisition</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div v-for="(ind,key) in items.qnt">
                        <div class="row" id="item_add_body">
                            <div class="col-3">
                                <div class="form-group">
                                    <label>Item</label>
                                    <select class="form-control select2" v-model="items.itemid[key]" v-bind:id="'item_select_'+key" v-on:change="setPriceAndUnit(items.itemid[key],key)">
                                        <option v-for="item in allItems" :value="item.id">{{item.item_name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-3 mb-2">
                                <div class="form-group">
                                    <label>Qnt</label>
                                    <input type="text" class="form-control" v-model="items.qnt[key]">
                                </div>
                            </div>
                            <div class="col-3 mt-5">
                                {{items.unit[key]}}
                            </div>
                            <div class="col-3 mt-5">
                                {{ (items.price[key]) ? items.price[key]+" BDT / "+items.unit[key] : ""}}
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
                unit : [],
                price: [],
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
            await this.axios.get('/api/getallitems',{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response=>{
                this.allItems = response.data
            }).catch(error=>{
                console.log(error)
                this.allItems = []
            })
        },
        async submitReceive(){
            await this.axios.post('/api/requisition',this.items,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response=>{
                this.$router.push({name:"requisitionList"})
                swal("Saved!", "Requisition Submitted!", "success");
            }).catch(error=>{
                console.log(error)
            })
        },
        setPriceAndUnit(item_id,key){
            var selected = this.allItems.find((item) => item.id == item_id)
            this.items.unit[key] = selected.unit;
            this.items.price[key] = selected.price;
        }
    }
}
</script>
