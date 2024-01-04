<script>
  import { ref, onMounted } from "vue"
  export default {
    setup(){
      const title = ref('')
      const getSerie = (id) =>{
        return new Promise((resolve, reject) =>{
          fetch('https://vue-100-ejercicios-cli-series.firebaseio.com/'+id+'.json')
            .then(response =>{
              if(response.ok) return response.json()
              else reject(response.statusText)
            })
            .then(data =>{ resolve(data) })
            .catch(error =>{ 
              console.log(error)
              reject(error)
            })
        })
      }
      onMounted(() =>{
        getSerie(1)
          .then((res) =>{ title.value += res.Titulo })
          .catch((error) =>{ alert(error.message) })
      })
      return {
        title
      }
    }
  }
</script>

<template>
  <h4>Promesas</h4>
  <p v-if="title">{{ title }}</p>
  <p v-else>Cargando...</p>
</template>