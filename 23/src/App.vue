<script>
  export default {
    setup(){
    },
    directives: {
      format: {
        mounted: (el, binding) =>{
          const modifiers = binding.modifiers
          if(modifiers.underline){
              el.style.textDecoration = 'underline'
          }
          if(modifiers.bold){
              el.style.fontWeight = 'bold'
          }
          if(modifiers.highlight){
              el.style.background = '#FF00FF'
          }
        }
      }
    }
  }
</script>

<template>
  <h1 v-format.bold.underline.highlight>TITULO</h1>
  <h2 v-format.bold.underline.highlight>SUBTITULO</h2>
</template>