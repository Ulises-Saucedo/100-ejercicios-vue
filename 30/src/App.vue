<script>
  import { ref } from "vue"
  export default {
    setup(){
      const step = ref(0)
      return {
        step
      }
    }
  }
</script>

<template>
  <p><b>Condicional</b></p>
  <p v-if="step === 0">{{ step }}-> Si desaparece este contenido no estara en el DOM</p>
  <p v-if="step === 1">{{ step }}-> Inspecciona el DOM, lo anterior no esta</p>
  <p v-else>FIN</p>
  <p><b>V-SHOW</b></p>
  <p v-show="step === 0">{{ step }}-> Si desaparecio, este contenido estara en el DOM</p>
  <p v-show="step === 1">{{ step }}-> Inspecciona el DOM, el anterior permanece</p>
  <input type="button" @click="step++" value="Incrementar pasos">
</template>

<style>
  [v-cloak] > * { display: none; }
  [v-cloak]::before { content: 'Cargando...'; }
</style>