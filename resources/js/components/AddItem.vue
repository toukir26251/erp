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
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="item.itemname">
                                    <p class="text-danger">{{error.itemname}}</p>
                                </div>
                            </div>
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Code</label>
                                    <input type="text" class="form-control" v-model="item.itemcode">
                                    <p class="text-danger">{{error.itemcode}}</p>
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
                                    <p class="text-danger">{{error.itemprice}}</p>
                                </div>
                            </div>
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Unit</label>
                                    <input type="text" class="form-control" v-model="item.itemunit">
                                    <p class="text-danger">{{error.itemunit}}</p>
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
                itemprice:'',
                itemunit:''
            },
            error:{
                itemname:'',
                itemcode:'',
                itemdetails:'',
                itemprice:'',
                itemunit:''
            }

        }
    },
    methods:{
        validate(data_to_check,error_show,type){
            console.log(data_to_check);
            if(type === "string"){
                if(data_to_check == ""){
                    if(error_show == 'itemname'){
                        this.error.itemname = "This field is required";
                    }
                    if(error_show == 'itemcode') {
                        this.error.itemcode = "This field is required";
                    }
                    if(error_show == 'itemunit'){
                        this.error.itemunit = "This field is required";
                    }
                    return false;
                }
                else{
                    if(error_show == 'itemname'){
                        this.error.itemname = "";
                    }
                    if(error_show == 'itemcode'){
                        this.error.itemcode = "";
                    }
                    if(error_show == 'itemunit'){
                        this.error.itemunit = "";
                    }
                    return true;
                }
            }
            if(type === "number"){
                if(data_to_check == ""){
                    if(error_show == 'itemprice'){
                        this.error.itemprice = "This field is required";
                    }
                    return false;
                }
                else if(data_to_check < 1){
                    if(error_show == 'itemprice'){
                        this.error.itemprice = "Minimum value 1";
                    }
                    return false;
                }
                else{
                    if(error_show == 'itemprice'){
                        this.error.itemprice = "";
                    }
                    return true;
                }
            }

        },
        async create(){
            if(this.validate(this.item.itemname,"itemname","string") && this.validate(this.item.itemcode,"itemcode","string") && this.validate(this.item.itemprice,"itemprice","number") && this.validate(this.item.itemunit,"itemunit","string")){
                await this.axios.post('/api/items',this.item,{
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(response=>{
                    this.$router.push({name:"itemList"})
                    swal("Added!", "Item saved!", "success");
                }).catch(error=>{
                    console.log(error)
                })
            }

        }


    }
}
</script>
