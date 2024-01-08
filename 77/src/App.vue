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
      const deleteData = async () =>{
        await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        values.value.splice(0,1)
      }
      onMounted(async() =>{
        await fetchData()
      })
      return {
        values,
        deleteData
      }
    }
  }
</script>

<template>
  <button @click="deleteData">Eliminar data</button>
  <ul>
    <li v-for="item in values" :key="item.id">{{ item.title }} | {{ item.id }}</li>
  </ul>
</template>