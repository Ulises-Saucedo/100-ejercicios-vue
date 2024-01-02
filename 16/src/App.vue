<script>
  export default{
    setup(){
      const post = {
        title: "Nuevo artículo",
        date: "24/03/2019",
        author: "Ramón"
      }
      return {
        post
      }
    }
  }
</script>

<template>
  <h1>v-for object</h1>
  <ul>
    <li v-for="(value, key, index) in post">
      {{ index + 1 }} => {{ key }}: {{ value }}
    </li>
  </ul>
</template>