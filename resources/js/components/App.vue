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
    <nav id="sidebar">
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
<!--                    <li>-->
<!--                        <router-link exact-active-class="active" to="/itemlist" class="nav-item nav-link"><i class="fa fa-list" aria-hidden="true"></i>-->
<!--                            All Receives</router-link>-->
<!--                    </li>-->
                </ul>
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
        methods:{
            logout(){
                axios.post('/api/logout').then(()=>{
                    localStorage.clear()
                    this.$router.push({name: 'home'})
                })
            }
        }
    }
</script>
