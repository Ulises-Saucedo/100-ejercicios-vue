<script>
  import { ref, computed } from "vue"
  export default {
    setup(){
      const word = ref('')
      const dictionary = [
        {
          EN: "Hello",
          ES: "Hola"
        },
        {
          EN: "Bye",
          ES: "Chau"
        },
        {
          EN: "Good",
          ES: "Bueno"
        },
        {
          EN: "Bad",
          ES: "Malo"
        }
      ]

      const clear = () =>{
        word.value = ''
      }

      const anyMatch = computed(() => {
        let match = false
        let words = []
        dictionary.map((w) =>{
          if(word.value !== '' && w.ES.toLowerCase().includes(word.value.toLowerCase())){
            words.push(w)
          }
        })
        return words
      })

      return {
        word,
        dictionary,
        anyMatch,
        clear
      }
    }
  }
</script>

<template>
  <h1>Traductor</h1>
  <input type="text" placeholder="Introduzca la palabra a traducir" v-model="word">
  <input type="button" @click="clear" value="Limpiar">
  <div v-for="match in anyMatch">
    <span>{{ match.ES }}-->{{ match.EN }}</span>
  </div>
</template>