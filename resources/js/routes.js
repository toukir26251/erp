const Welcome = () => import('./components/Welcome.vue');
const Home = () => import('./components/Home.vue');
const ItemList = () => import('./components/List.vue');
const Login = () => import('./components/Login.vue');
const AddItem = () => import('./components/AddItem.vue');
const EditItem = () => import('./components/EditItem.vue');
const StoreReceive = () => import('./components/StoreReceive.vue');
const AllStoreReceive = () => import('./components/AllStoreReceive.vue');
const Stock = () => import('./components/Stock.vue');
const RequisitionAdd = () => import('./components/RequisitionAdd');
const RequisitionList = () => import('./components/AllRequisition.vue');
const PendingRequisition = () => import('./components/PendingRequisition.vue');
const Unauthorized = () => import('./components/Unauthorized.vue');

// var token = window.localStorage.getItem('token');
// console.log(token);

export const routes = [
    {
        name:'welcome',
        path:'/',
        component: Welcome
    },
    {
        name:'unAuthorized',
        path:'/unauthorized',
        component: Unauthorized,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin' || type === "store_executive" || type === "employee") {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name:'home',
        path:'/home',
        component: Home,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin' || type === "store_executive" || type === "employee") {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'itemList',
        path: '/itemlist',
        component: ItemList,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin') {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'editItem',
        path: '/item/:id/edit',
        component: EditItem,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin') {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'additem',
        path: '/additem',
        component: AddItem,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin') {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'storeReceive',
        path: '/storereceive',
        component: StoreReceive,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin' || type === "store_executive") {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'storeReceiveTrans',
        path: '/storereceivetrans',
        component: AllStoreReceive,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin' || type === "store_executive") {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'stock',
        path: '/stock',
        component: Stock,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin' || type === "store_executive") {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'requisitionAdd',
        path: '/requisitionadd',
        component: RequisitionAdd,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin' || type === "employee") {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'requisitionList',
        path: '/requisitionlist',
        component: RequisitionList,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin' || type === "employee") {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'pendingrequisitions',
        path: '/pendingRequisitions',
        component: PendingRequisition,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res)=>{
                var type = res.data.roles[0].name;
                if(type === 'admin' || type === "store_executive") {
                    next()
                }
                else {
                    next({name: 'unAuthorized'});
                }
            }).catch(()=>{
                return next({name:'login'});
            })
        }
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
];


const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem(token)) {
        next();
        return;
    }
    router.push({
        name: 'login',
        params: {
            returnTo: to.path,
            query: to.query,
        },
    });
};
