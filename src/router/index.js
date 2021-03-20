import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactPage from "@/views/ContactPage";
import Home from "@/views/Home";
import CartPage from "@/views/CartPage";
import ProductPage from "@/views/ProductPage";

Vue.use(VueRouter)

let addToCartButton = {
    text: "Add to cart",
    event: "add-to-cart"
}

const routes = [
    {
        path: "/products",
        name: "NewProducts",
        component: ProductPage,
        props: {
            greenButton: addToCartButton,
        }
    },
    {
        path: "/cart",
        name: "Cart",
        component: CartPage
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
