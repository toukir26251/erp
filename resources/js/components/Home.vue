<template>
    <div class="row">
        <div class="col-md-3">
            <div class="card">
                <div class="card-body card-data-view">

            
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-body card-data-view">

            
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-body card-data-view">

            
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card">
                <div class="card-body card-data-view">

            
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
            categories:[]
        }
    },
    mounted(){
        this.getCategories()
    },
    methods:{
        async getCategories(){
            await this.axios.get('/api/items').then(response=>{
                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },
        deleteCategory(id){
            if(confirm("Are you sure to delete this category ?")){
                this.axios.delete(`/api/items/${id}`).then(response=>{
                    this.getCategories()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>