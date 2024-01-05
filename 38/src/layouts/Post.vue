<script>
export default {
    setup() {
        return {
            header: "Article",
            image: "https://media.istockphoto.com/id/1434218035/es/foto/antena-suburbana-de-austin.jpg?s=2048x2048&w=is&k=20&c=XU8W1mpQ0oXbvzewTZz4ro4ndO3q3lvwB5v7sBIFBps="
        }
    }
}
</script>

<template>
    <h1>{{ header }}</h1>
    <img :src="image">
    <slot name="content"></slot>
</template>