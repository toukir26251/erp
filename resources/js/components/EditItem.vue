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
                    <form @submit.prevent="update">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
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
                                <button type="submit" class="btn btn-primary">Update</button>
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
                itemunit:'',
                _method:"patch"
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
    mounted() {
        this.getItem()
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
        async getItem(){

                await this.axios.get(`/api/items/${this.$route.params.id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(response => {
                    this.item.itemname = response.data.data.itemname
                    this.item.itemcode = response.data.data.itemcode
                    this.item.itemdetails = response.data.data.itemdetails
                    this.item.itemprice = response.data.data.itemprice
                    this.item.itemunit = response.data.data.itemunit
                }).catch(error => {
                    console.log(error)
                })
        },
        async update(){
            if(this.validate(this.item.itemname,"itemname","string") && this.validate(this.item.itemcode,"itemcode","string") && this.validate(this.item.itemprice,"itemprice","number") && this.validate(this.item.itemunit,"itemunit","string")) {
                await this.axios.post(`/api/items/${this.$route.params.id}`, this.item, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(response => {
                    this.$router.push({name: "itemList"})
                    swal("Updated!", "Change saved!", "success");
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>
