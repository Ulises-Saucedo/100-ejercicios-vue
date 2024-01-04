<script>
  import { ref, onMounted } from "vue"
  export default {
    setup(){
      const series = ref([])
      onMounted(async() =>{
        const response = await fetch('https://vue-100-ejercicios-cli-series.firebaseio.com/json')
        const json = await response.json()
        series.value = json
      })
      return {
        series
      }
    }
  }
</script>

<template>
  <h4>Fetch</h4>
  <ul>
    <li v-for="serie in series">{{ serie.Titulo }}</li>
  </ul>
</template>