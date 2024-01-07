import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router