<script>
  import { ref, watch } from "vue"
  export default {
    props: {
      propValue: {
        type: String,
        required: true,
      }
    },
    setup(props){
      const myValue = ref(props.propValue)
      watch(() => props.propValue, (newPropValue) =>{
        myValue.value = newPropValue
      })
      return { 
        props,
        myValue
      }
    }
  }
</script>

<template>
  <p>Valor: {{ myValue }}</p>
</template>