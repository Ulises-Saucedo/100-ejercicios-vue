<script>
  import Props from "./components/Props.vue"
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
  <Props :propPerson="{FirstName: 'Ramón', LastName: 'Serrano'}"/>
</template>