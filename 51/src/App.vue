<script>
  export default {
    setup(){
      
    }
  }
</script>

<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link to="/serie/1">Serie 1</router-link>
    <router-link :to="{name: 'serie', params: {id: 2}}">Serie 2</router-link>
  </nav>
  <router-view></router-view>
</template>