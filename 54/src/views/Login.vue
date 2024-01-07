<script>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router' // beforeEach => protección de rutas
    export default {
        setup(){
            const router = useRouter()
            const loggedIn = ref(false)
            const doLogin = () => {
                loggedIn.value = true 
            }
            const logout = () => {
                loggedIn.value = false
            }
            return {
                loggedIn,
                doLogin,
                logout
            }
        }
    }
</script>

<template>
    <button v-if="!loggedIn" @click="doLogin">Iniciar sesión</button>
    <button v-else @click="logout">Cerrar sesion</button>
</template>