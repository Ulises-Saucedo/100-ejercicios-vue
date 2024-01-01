<script>
    import { ref } from "vue"
    export default{
        setup(){
            const title = ref('')
            const post = ref('')
            return {
                title,
                post,
            }
        }
    }
</script>

<template>
    <h1>My vue blog</h1>
    <h2>Nueva entrada</h2>
    <h3>Titulo</h3><input type="text" v-model="title">
    <textarea cols="50" v-model="post"></textarea>
    <h2>{{ title }}</h2>
    <p>{{ post }}</p>
</template>