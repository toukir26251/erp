<template>
    <div class="row text-center">
        <div class="col-md-3 h-100">
            <div class="card">
                <div class="card-body card-data-view">
                    <div class="row">
                        <div class="col-md-3 dashboard-data-div">
                            <i class="fa fa-th" aria-hidden="true"></i>
                        </div>
                        <div class="col-md-9">
                            <h5>Total Active Items (Count)</h5>
                            <h2>{{dashdata.total_items}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 h-100">
            <div class="card">
                <div class="card-body card-data-view">
                    <div class="row">
                        <div class="col-md-3 dashboard-data-div">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                        </div>
                        <div class="col-md-9">
                            <h5>Total Store Received (BTD)</h5>
                            <h2>{{dashdata.total_store_receive}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 h-100">
            <div class="card">
                <div class="card-body card-data-view">
                    <div class="row">
                        <div class="col-md-3 dashboard-data-div">
                            <i class="fa fa-list" aria-hidden="true"></i>
                        </div>
                        <div class="col-md-9">
                            <h5>Total Recuisition (Count)</h5>
                            <h2>{{dashdata.total_recuisitions}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 h-100">
            <div class="card">
                <div class="card-body card-data-view">
                    <div class="row">
                        <div class="col-md-3 dashboard-data-div">
                            <i class="fa fa-dollar" aria-hidden="true"></i>
                        </div>
                        <div class="col-md-9">
                            <h5>Total Recuisition Amount</h5>
                            <h2>{{dashdata.total_recusition_amount}}</h2>
                        </div>
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
            dashdata:{
                total_items: 10291,
                total_store_receive : 121232311,
                total_recuisitions : 12312,
                total_recusition_amount : 12322121
            }
        }
    },
    mounted(){
        this.getDashBoardData()
    },
    methods:{
        async getDashBoardData(){
            await this.axios.get('/api/dashdata',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(response=>{
                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        }
    }
}
</script>
