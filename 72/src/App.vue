<script>
  import axios from 'axios'
  export default {
    setup(){
      const cancelTokenSource = axios.CancelToken.source()
      const data = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          cancelToken: cancelTokenSource.token
        })
        console.log(response)
      }
      const cancelRequest = () => {
        cancelTokenSource.cancel('Solicitud cancelada manualmente')
      }
      return {
        data,
        cancelRequest
      }
    }
  }
</script>

<template>
  <button @click="data">Traer data (consola)</button>
  <button @click="cancelRequest">Cancelar solicitud</button>
</template>