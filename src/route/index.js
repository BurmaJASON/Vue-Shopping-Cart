import { createRouter, createWebHistory } from 'vue-router'

import Home from '../page/HomeView.vue'
import Product from '../page/ProductView.vue'
import Cart from '../page/CartView.vue'

const routes = [
    {
        path : '/',
        name : 'home',
        component : Home
    },
    {
        path : '/product',
        name : 'product',
        component : Product
    },
    {
        path : '/cart',
        name : 'cart',
        component : Cart
    }
];


const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
