<script>
    import { ref } from 'vue'
    export default{
        setup(){
            const image = ref('https://via.placeholder.com/320x240.png')
            const index = ref(0)
            const handleClick = () =>{
                image.value = `https://loremflickr.com/320/240?random=${index.value++}`
            }
            return {
                handleClick,
                image
            }
        }
    }
</script>

<template>
    <h1>v-bind image</h1>
    <button @click="handleClick">Change image!</button>
    <!-- <img :src="image"> -->
    <img v-bind:src="image">
</template>