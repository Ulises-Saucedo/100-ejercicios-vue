<script>
    export default{
        setup(){
            const message = "Hola VUE!"
            return {
                message
            }
        }
    }
</script>

<template>
    <h1>{{ message }}</h1>
</template>
