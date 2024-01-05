<script>
  import Post from "./layouts/Post.vue"
  export default {
    components: {
      Post
    },
    setup(){
      return {
        header: "Article",
        image: "https://lorempixel.com/400/200"
      }
    }
  }
</script>

<template>
  <Post>
    <template v-slot:content>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ab asperiores mollitia quidem eius sint impedit magnam laudantium molestiae commodi officiis natus assumenda, minus, voluptate nostrum nobis porro alias sapiente?</p>
    </template>
  </Post>
</template>