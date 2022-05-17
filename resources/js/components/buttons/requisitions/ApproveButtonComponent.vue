<template>
    <div>
        <button type="button" @click="approve(data.id)" class="btn btn-outline-success"><i class="fa fa-check-square-o" aria-hidden="true"></i></button>
        <button type="button" @click="done(data.id)" class="btn btn-outline-success"><i class="fa fa-check-square-o" aria-hidden="true"></i></button>
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
        async approve(id){
            swal({
                title: "Ok!",
                text: "Do you want to approve this requisition?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.axios.put(`/api/store/${id}`,{status:"approved",user: localStorage.getItem('user')}).then(response=> {
                            this.$router.push({name:"pendingrequisitions"})
                            swal("Done! This requisition is approved!", {
                                icon: "success",
                            });
                        })

                    } else {
                        swal("Not Done !");
                    }
                });
        },
        async done(id){
            swal({
                title: "Ok!",
                text: "Do you want to approve this requisition?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.axios.put(`/api/store/${id}`,{status:"done",user: localStorage.getItem('user')}).then(response=> {
                            this.$router.push({name:"pendingrequisitions"})
                            swal("Done! This requisition is approved!", {
                                icon: "success",
                            });
                        })

                    } else {
                        swal("Not Done !");
                    }
                });
        }
    }
}
</script>
