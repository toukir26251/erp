<template>
    <main>
    <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">Navbar</a>
    <button type="button" id="sidebarCollapse" class="btn col-btn">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    </nav>
    <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar">
        <ul class="list-unstyled components">
            <li>
                <router-link exact-active-class="active" to="/" class="nav-item nav-link">Home</router-link>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Items</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <router-link exact-active-class="active" to="/category" class="nav-item nav-link">All Items</router-link>
                    </li>
                </ul>
            </li>
        </ul>

    </nav>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
    </div>
    </main>
</template>
 
<script>
    export default {}
</script>