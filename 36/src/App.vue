<script>
  import { ref, onMounted } from "vue"
  export default {
    setup(){
      const titles = ref([])
      const messages = ref('')
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
        let promises = []
        promises.push(
          getSerie(1)
          .then((res) =>{ titles.value.push(res.Titulo) })
          .catch((error) =>{ alert(error.message) })
        )
        promises.push(
          getSerie(2)
          .then((res) =>{ titles.value.push(res.Titulo) })
          .catch((error) =>{ alert(error.message) })
        )
        Promise.all(promises).then((res) =>{
          messages.value = "Se han cargado: "+promises.length + " elementos."
        })
      })
      return {
        titles
      }
    }
  }
</script>

<template>
  <h4>Promesas All</h4>
  <p v-for="title in titles">{{ title }}</p>
  <p>{{ message }}</p>
</template>