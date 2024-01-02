<script>
  import { ref } from "vue"
  export default {
    setup(){
      const mouseX = ref(0)
      const mouseY = ref(0)
      function move(e){
        mouseX.value = e.clientX
        mouseY.value = e.clientY
      }
      return {
        mouseX,
        mouseY,
        move
      }
    }
  }
</script>

<template>
  <h1>Mouse move</h1>
  <div class="mousearea" @mousemove="move"></div>
  <div>{{ mouseX }} - {{ mouseY }}</div>
</template>

<style scoped>
  .mousearea{
    width: 300px;
    border: 15px solid green;
    padding: 50px;
    margin: 20px;
  }
</style>