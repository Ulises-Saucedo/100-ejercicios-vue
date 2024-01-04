<script>
  import MyTranslator from "./components/MyTranslator.vue"
  export default {
    components: {
      MyTranslator
    }
  }
</script>

<template>
  <MyTranslator language="ES" />
  <MyTranslator language="EN" />
</template>

<style scoped>
  input[type=text]{
    width: 20em;
    height: 3em;
  }
</style>