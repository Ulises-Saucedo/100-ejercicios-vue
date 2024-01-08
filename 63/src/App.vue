<script>
  import { useFirstGetter } from './store/store.js'
  export default {
    setup(){
      const firstGetter = useFirstGetter()
      return {
        firstGetter,
      }
    }
  }
</script>

<template>
  <h1>{{ firstGetter.count }} * 2 = {{ firstGetter.doubleCount }}</h1>
</template>