<script>
  import { ref, watch, nextTick } from "vue"
  export default {
    setup(){
      const focus = ref(false)
      const nombreRef = ref(null)
      const doFocus = () =>{
        focus.value = false
        nextTick(() => {
          focus.value = true
        })
      }
      watch(() =>{
        console.log("Focus: ", focus.value)
        if(focus.value) nombreRef.value.focus()
      })
      return {
        focus,
        doFocus,
        nombreRef
      }
    }
  }
</script>

<template>
  <p>Focus: {{ focus }}</p>
  <input type="text" ref="nombreRef" value="Ramón">
  <input type="button" @click="doFocus" value="Hacer foco">
</template>