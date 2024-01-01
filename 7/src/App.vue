<script>
    import { ref, watch } from "vue"
    export default{
        setup(){
            const message = ref("Hola vue!")
            watch(message, (newValue, oldValue) =>{
                console.log('oldvalue =>',oldValue,' newvalue =>',newValue)
            })
            return {
                message
            }
        }
    }
</script>

<template>
    <h1>{{ message }}</h1>
    <input type="text" v-model="message">
</template>