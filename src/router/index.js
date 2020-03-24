import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from "@/App"
import Home from '@/pages/Home.vue'
import ProductDetail from '@/components/ProductDetail'
// import ProductList from '@/components/ProductList'
// import Products from '@/pages/Products'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        // props: true
    },
    {
        path: '/products',
        name: 'Product',
        component: ProductDetail,
        props: true
    },
    {
        path: '/product/:id',
        name: 'Details',
        component: ProductDetail,
        props: true
    },

]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router