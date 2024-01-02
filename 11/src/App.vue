<script>
    import { ref } from 'vue';
    export default{
        setup(){
            const enterMessage = ref('')
            const inputText = ref('')
            const onEnterPressed = () =>{
                enterMessage.value = inputText.value
            }
            return {
                message: "Escuchando evento teclado [Enter]",
                enterMessage,
                inputText,
                onEnterPressed
            }
        }
    }
</script>

<template>
    <h1>{{ message }}</h1>
    <input type="text" @keyup.enter="onEnterPressed" v-model="inputText">
    <p>{{ enterMessage }}</p>
</template>