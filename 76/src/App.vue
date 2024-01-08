<script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  export default {
    setup(){
      const values = ref([])
      const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        values.value = response.data
      }
      const postearData = async () =>{
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
          userId: 1,
          id: 1,
          title: "lorem ipsum xDDDDDDD",
          body: "Cuerpo de la solicitud post"
        })
        values.value[0] = response.data
      }
      onMounted(async() =>{
        await fetchData()
      })
      return {
        values,
        postearData
      }
    }
  }
</script>

<template>
  <button @click="postearData">Cambiar data</button>
  <ul>
    <li v-for="item in values" :key="item.id">{{ item.title }} | {{ item.id }}</li>
  </ul>
</template>