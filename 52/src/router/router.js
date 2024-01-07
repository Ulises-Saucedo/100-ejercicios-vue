import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PerfilView from '../views/PerfilView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/perfil',
        name: 'perfil',
        component: PerfilView,
        children: [
            {
                path: '', name: 'publico', component: () => import('../views/PerfilPublico.vue')
            },
            {
                path: 'privado', name: 'privado', component: () => import('../views/PerfilPrivado.vue')
            }
        ]
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router