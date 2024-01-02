<script>
  import { ref } from 'vue'
  export default{
    setup(){
        const message = ref('Solo una vez')
        return {
          message
        }
      }
    }
</script>

<template>
  <h1 v-once>{{ message }}</h1>
  <input type="text" v-model="message">
</template>