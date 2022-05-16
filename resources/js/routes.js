const Welcome = () => import('./components/Welcome.vue');
const Home = () => import('./components/Home.vue');
const ItemList = () => import('./components/List.vue');
const Login = () => import('./components/Login.vue');
const AddItem = () => import('./components/AddItem.vue');
const EditItem = () => import('./components/EditItem.vue');

// var token = window.localStorage.getItem('token');
// console.log(token);

export const routes = [
    {
        name:'welcome',
        path:'/',
        component: Welcome
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
            }).then(()=>{
                next()
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
            }).then(()=>{
                next()
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
            }).then(()=>{
                next()
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
            }).then(()=>{
                next()
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
