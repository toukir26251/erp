<template>
    <div>
        <router-link :to='{name:"editItem",params:{id:data.id}}' class="btn btn-outline-success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link>
        <button type="button" @click="deleteItem(data.id)" class="btn btn-outline-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    </div>
</template>

<script>
    export default {
        props:{
            data: {},
            name: {},
            click: {},
            classes: {},
        },
        methods:{
            async deleteItem(id){
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
                                this.$router.push({name:"itemList"})
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
