<script>
    import { ref, onMounted } from "vue"
    export default{
        setup(){
            const mySubtitle = ref(null)
            const mySubtitle2 = ref(null)
            const clickedButton = () =>{
                mySubtitle.value.innerText = "100 ejercicios"
                mySubtitle.value.style.color = "red"
                mySubtitle2.value.innerText = "para aprender Vue"
                mySubtitle2.value.style.color = "blue"
            }
            return{
                message: "Elementos de la instancia vue",
                mySubtitle,
                mySubtitle2,
                clickedButton
            }
        }
    }
</script>

<template>
    <h1>{{ message }}</h1>
    <h2 ref="mySubtitle"></h2>
    <h2 ref="mySubtitle2"></h2>
    <button @click="clickedButton">Click me!</button>
</template>