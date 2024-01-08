<template>
  <div>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const loading = ref(false)
    const data = ref(null)

    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use((config) => {
      loading.value = true
      return config
    })

    axiosInstance.interceptors.response.use(
      (response) => {
        loading.value = false
        return response
      },
      (error) => {
        loading.value = false
        return Promise.reject(error)
      }
    )

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('https://jsonplaceholder.typicode.com/posts')
        data.value = response.data
      } catch (error) {
        console.error('Error al obtener datos:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      loading,
      data
    }
  }
}
</script>
