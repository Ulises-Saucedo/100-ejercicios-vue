<script>
    import { useRoute } from 'vue-router'
    export default {
        props: {
            propCadena: {
                type: String,
                default: 'todos'
            }
        },
        setup(props){
            const route = useRoute()
            return {
                props
            }
        }
    }
</script>

<template>
    <h1>Favoritos - {{ props.propCadena }}</h1>
</template>