<script>
  import Props from './components/Props.vue';
  export default {
    components: {
      Props
    },
    setup(){
      return {

      }
    }
  }
</script>

<template>
  <Props 
    propRequired="Hola mundo"
    :propArray="['España', 'Europa', 'Mundo']"
    :propObject="{name: 'Ramón', age: 34}"
    propMultipleValue="25-10-1984"
  />
</template>