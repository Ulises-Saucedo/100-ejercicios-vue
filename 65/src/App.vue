<script>
  import { useCounterStore } from './store/store';
  export default {
    setup(){
      const useCounter = useCounterStore()
      return {
        useCounter
      }
    }
  }
</script>

<template>
  <h1>{{ useCounter.count }} x 2 = {{ useCounter.doubleCount }}</h1>
  <button @click="useCounter.increment()">Multiplicar x 2</button>
</template>