<script>
    import { ref } from 'vue'
    export default{
        setup(){
            const pet = ref('')
            const image = ref('')
            const choosePet = () =>{
                image.value = `https://loremflickr.com/320/240/${pet.value}`
            }
            return {
                pet,
                image,
                choosePet
            }
        }
    }
</script>

<template>
    <h1>Vue v-if v-else</h1>
    <h2>Eres de perros o gatos?</h2>
    <select v-model="pet" v-on:change="choosePet">
        <option></option>
        <option>dog</option>
        <option>cat</option>
    </select>
    <div v-if="pet">
        <div v-if="pet === 'dog'">
            <h1>Woof!</h1>
            <img :src="image">
        </div>
        <div v-if="pet === 'cat'">
            <h1>Miau!</h1>
            <img :src="image">
        </div>
    </div>
</template>