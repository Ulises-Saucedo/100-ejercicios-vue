<script>
    export default{
        setup(){
            const title = "Hola vue"
            const showMessage = () =>{
                console.log(`Showing message: ${title} Aprendamamos!`)
                return `Showing message: ${title} Aprendamamos!`
            }
            return{
                showMessage
            }
        }
    }
</script>

<template>
    <h1>{{ showMessage() }}</h1>
    <button @click="showMessage">Mostrar titulo</button>
</template>