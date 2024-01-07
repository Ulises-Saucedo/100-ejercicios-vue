<script>
    import { useRouter } from 'vue-router'
    export default {
        setup(){
            const router = useRouter()
            const goHome = () =>{
                router.replace({name: 'home'})
            }
            return {
                router,
                goHome
            }
        }
    }
</script>

<template>
    <div>
        <h1>Página no encontrada</h1>
        <span @click="goHome">Volver al inicio</span>
    </div>
</template>