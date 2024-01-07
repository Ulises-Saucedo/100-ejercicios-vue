import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SerieView from '../views/SerieView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/serie/:id',
        name: 'serie',
        component: SerieView
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router