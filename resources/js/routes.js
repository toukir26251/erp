const Home = () => import('./components/Home.vue');
const ItemList = () => import('./components/List.vue');

export const routes = [
    {
        name:'home',
        path:'/',
        component: Home
    },
    {
        name: 'itemList',
        path: '/category',
        component: ItemList
    }
];