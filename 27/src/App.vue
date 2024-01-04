<script>
  import { ref } from "vue"
  import Props from "./components/Props.vue"
  export default {
    components: {
      Props
    },
    setup(){
      const valueData = ref('Valor inicial')
      return { 
        valueData
      }
    } 
  }
</script>

<template>
  <input type="text" v-model="valueData" />
  <Props :propValue="valueData" />
</template>