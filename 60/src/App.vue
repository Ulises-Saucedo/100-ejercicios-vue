<script>
  import ButtonComponent from './components/ButtonComponent.vue'
  export default {
    components: {
      ButtonComponent
    },
    setup(){
      const emitEvent = () =>{
        console.log("Se hizo click en el boton")
      }
      return {
        emitEvent
      }
    }
  }
</script>

<template>
  <ButtonComponent @emitEvento="emitEvent"></ButtonComponent>
</template>