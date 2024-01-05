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
        toggle,
        beforeEnter: (el) => {
          el.style.opacity = 0
        },
        enter: (el, done) => {
          el.offsetWidth
          el.style.transition = "opacity 3s"
          el.style.opacity = 1
          done()
        },
        leave: (el, done) => {
          el.style.transition = "opacity 3s";
          el.style.opacity = 0
          done()
        }
      }
    }
  }
</script>

<template>
  <button @click="toggle">Toggle</button>
  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
    <img v-if="showImage" src="https://media.istockphoto.com/id/1434218035/es/foto/antena-suburbana-de-austin.jpg?s=2048x2048&w=is&k=20&c=XU8W1mpQ0oXbvzewTZz4ro4ndO3q3lvwB5v7sBIFBps=">
  </transition>
</template>