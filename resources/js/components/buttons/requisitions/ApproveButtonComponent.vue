<template>
    <div>
        <button v-if="type === 'admin'" type="button" @click="approve(data.id,'rejected')" class="btn btn-outline-danger" title="Reject"><i class="fa fa-times" aria-hidden="true"></i></button>
        <button v-if="type === 'admin'" type="button" @click="approve(data.id,'approved')" class="btn btn-outline-success" title="Approve"><i class="fa fa-check-square-o" aria-hidden="true"></i></button>
        <button v-if="type === 'store_executive'" type="button" @click="done(data.id)" class="btn btn-outline-success" title="Make Done"><i class="fa fa-check-square-o" aria-hidden="true"></i></button>
    </div>
</template>

<script>
export default {
    data(){
      return{
          type : "",
      }
    },
    props:{
        data: {},
        name: {},
        click: {},
        classes: {},
    },
    created() {
        this.settype();
    },
    methods:{
        settype(){
            this.type = localStorage.getItem('role');
        },
        async approve(id, action){
            swal({
                title: "Ok!",
                text: "Do you want to make this requisition "+action+"?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.axios.put(`/api/store/${id}`,{status:action,user: localStorage.getItem('user')},{
                            headers:{
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            }
                        }).then(response=> {
                            this.$router.push({name:"pendingrequisitions"})
                            swal("Done! This requisition is "+action+"!", {
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
                text: "Do you want to make Done this requisition?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        this.axios.put(`/api/store/${id}`,{status:"done",user: localStorage.getItem('user')},{
                            headers:{
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            }
                        }).then(response=> {
                            this.$router.push({name:"pendingrequisitions"})
                            swal("Done! This requisition is Done!", {
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
