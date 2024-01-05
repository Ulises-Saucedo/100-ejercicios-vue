<script>
  import { ref } from "vue"
  export default {
    setup() {
      const showImage = ref(true)
      const toggle = () => {
        showImage.value = !showImage.value
      }
      return {
        showImage,
        toggle
      }
    }
  }
</script>

<template>
  <button @click="toggle">Toggle</button>
  <transition name="fade">
    <img v-if="showImage" src="https://media.istockphoto.com/id/1434218035/es/foto/antena-suburbana-de-austin.jpg?s=2048x2048&w=is&k=20&c=XU8W1mpQ0oXbvzewTZz4ro4ndO3q3lvwB5v7sBIFBps=">
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
