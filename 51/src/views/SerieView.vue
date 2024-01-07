<script>
    import { useRoute } from 'vue-router'
    import { ref, watch } from 'vue'
    export default {
        setup(){
            const route = useRoute()
            const id = ref(route.params.id)
            watch(() => route.params.id, (newID) => {
                    id.value = newID
                }
            )
            return {
                id,
                route
            }
        }
    }
</script>

<template>
    <h1>Serie: {{ id }} - {{ route.params.id }}</h1>
</template>