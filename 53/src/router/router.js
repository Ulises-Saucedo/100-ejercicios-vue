import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/404',
        name: 'noEncontrada',
        component: () => import('../views/404.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'noEncontrada' }
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router