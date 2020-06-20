import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('../views/MainPage.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router
