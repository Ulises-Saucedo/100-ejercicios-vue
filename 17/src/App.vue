<script>
  import { ref } from 'vue'
  export default{
    setup(){
      const newProduct = ref('')
      const shoppingList = ref(["manzana", "leche", "hamburguesas", "patatas fritas"])
      const onEnterPressed = () =>{
        shoppingList.value.push(newProduct.value)
        newProduct.value = ''
      }
      const convertirMayusculas = (text) => {
        return text.toUpperCase()
      }
      return {
        newProduct,
        shoppingList,
        onEnterPressed,
        convertirMayusculas
      }
    }
  }
</script>

<template>
  <h1>v-for</h1>
  <h2>Lista de compras</h2>
  <input type="text" @keyup.enter="onEnterPressed" v-model="newProduct">
  <ul>
    <li v-for="product in shoppingList">
      {{ convertirMayusculas(product) }}
    </li>
  </ul>
</template>