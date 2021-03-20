import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from "@/views/ProductsPage";
import ContactPage from "@/views/ContactPage";
import Home from "@/views/Home";
import CartPage from "@/views/CartPage";

Vue.use(VueRouter)

const routes = [
    {
        path: "/cart",
        name: "Cart",
        component: CartPage
    },
    {
        path: '/products',
        name: 'ProductsPage',
        component: ProductsPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/',
        alias: ["", "/home"],
        name: 'HomePage',
        component: Home
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
