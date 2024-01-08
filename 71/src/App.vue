<script>
  import axios from 'axios'
  export default {
    setup(){
      const data = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response)
      }
      return {
        data
      }
    }
  }
</script>

<template>
  <button @click="data">Traer data (consola)</button>
</template>