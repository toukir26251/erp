<template>
    <main>
    <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">ERP Mini</a>
    <button type="button" id="sidebarCollapse" class="btn col-btn">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    </nav>
    <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar" v-if="auth">
        <ul class="list-unstyled components">
            <li>
                <router-link exact-active-class="active" to="/home" class="nav-item nav-link"><i class="fa fa-home" aria-hidden="true"></i> Home</router-link>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-th" aria-hidden="true"></i> Items</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <router-link exact-active-class="active" to="/additem" class="nav-item nav-link"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Items</router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="active" to="/itemlist" class="nav-item nav-link"><i class="fa fa-list" aria-hidden="true"></i>
                            All Items</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-cart-plus" aria-hidden="true"></i> Store</a>
                <ul class="collapse list-unstyled" id="pageSubmenu1">
                    <li>
                        <router-link exact-active-class="active" to="/storereceive" class="nav-item nav-link"><i class="fa fa-plus-circle" aria-hidden="true"></i> Receive Items</router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="active" to="/storereceivetrans" class="nav-item nav-link"><i class="fa fa-list" aria-hidden="true"></i>
                            All Receives</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fa fa-hand-paper-o" aria-hidden="true"></i> Requisition</a>
                <ul class="collapse list-unstyled" id="pageSubmenu2">
                    <li>
                        <router-link exact-active-class="active" to="/requisitionadd" class="nav-item nav-link"><i class="fa fa-plus-circle" aria-hidden="true"></i> Requisition Create</router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="active" to="/requisitionlist" class="nav-item nav-link"><i class="fa fa-list" aria-hidden="true"></i>
                            All Requisitions</router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="active" to="/pendingrequisitions" class="nav-item nav-link"><i class="fa fa-tasks" aria-hidden="true"></i>
                            Pending Requisitions</router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link exact-active-class="active" to="/stock" class="nav-item nav-link"><i class="fa fa-database" aria-hidden="true"></i> Stock</router-link>
            </li>
            <li>
                <a role="button" @click.prevent="logout"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
            </li>
        </ul>
    </nav>
    <div class="container-fluid mt-4 mx-md-3">
        <router-view></router-view>
    </div>
    </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
                auth:false,
            }
        },
        created() {
            this.ifAuthenticated();
        },
        methods:{
            logout(){
                axios.post('/api/logout').then(()=>{
                    localStorage.clear()
                    this.$router.go()
                    this.$router.push({name: 'home'})
                })
            },
            ifAuthenticated(){
                console.log('asdf');
                if (localStorage.getItem('token')) {
                    this.auth = true;
                }
                else
                    this.auth = false;
            }
        }
    }
</script>
