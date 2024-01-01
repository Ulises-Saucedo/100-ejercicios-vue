<script>
    import { onBeforeMount, onBeforeUpdate, onBeforeUnmount, onMounted, onUpdated, onUnmounted } from "vue"
    export default{
        setup(){
            onBeforeMount(() => console.log("onBeforeMount"))
            onMounted(() => console.log("onMounted"))
            onBeforeUpdate(() => console.log("onBeforeUpdate"))
            onUpdated(() => console.log("onUpdated"))
            onBeforeUnmount(() => console.log("onBeforeUnmounted"))
            onUnmounted(() => console.log("onUnmounted"))
        }
    }
</script>

<template>
    
</template>