import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component: () => import('../views/Favoritos.vue'),
        props: (ruta) => ( { propCadena: ruta.query.cadena } ),
        beforeEnter: (to, from, next) => { 
            if(to.query.cadena) next()
            else alert('Parametro no permitido')
        }
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router