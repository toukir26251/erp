<template>
    <div class="row">
        <div class="col-md-4">
        </div>
        <div class="col-md-4 login-div p-3">
            <div class="text-center">
                <h1>Login</h1>
            </div>
<!--            <input type="hidden" name="_token" :value="csrf">-->
            <div class="p-2 form-group">
                <label for="email">Your e-mail</label>
                <input class="form-control" placeholder="Email" type="email" v-model="form.email">
            </div>
            <div class="p-2 form-group">
                <label for="password">Password</label>
                <input class="form-control" placeholder="Password" type="password" v-model="form.password" name="password">
            </div>
            <div class="p-2 form-group">
                <button @click.prevent="loginUser" type="submit" class="btn btn-primary">Login</button>
            </div>
        </div>
        <div class="col-md-4">
        </div>
    </div>
</template>
<script>
// var csrf_token = $('meta[name="csrf-token"]').attr('content');
export default {
    data(){
        return{
            form:{
                email: '',
                password: '',
            },
            errors: []
        }
    },
    methods:{
        loginUser(){
            axios.post('/api/login', this.form).then((res) =>{
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.user);
                localStorage.setItem('role', res.data.role);
                this.$router.push({ name: "home"});
                // this.alerts = true;
                // console.log(res.data.token);
                // this.$router.push({ name: "home"});
                setTimeout(() => {this.$router.go(); },1000);
            }).catch((error) =>{
                this.errors = error.response.data.errors;
            })
        }
    }
}
</script>
