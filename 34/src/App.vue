<script>
  import { ref, onMounted } from "vue"
  export default {
    setup(){
      const message = ref('Mensaje data')
      function fRegular(){ console.log(message.value) }
      const fRegularArrow = () =>{ console.log(message.value) }
      onMounted(() =>{
        fRegular()
        fRegularArrow()
      })
      return {
        message,
      }
    }
  }
</script>

<template>
  <h1>Contexto this</h1>
</template>