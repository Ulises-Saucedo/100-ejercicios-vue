<script>
  import { useFakeAuthStore } from './store/store';
  export default {
    setup(){
      const authStore = useFakeAuthStore()
      return {
        authStore
      }
    }
  }
</script>

<template>
  <h1>Primeros pasos pinia</h1>
  <h1 v-if="!authStore.loggedIn">Bienvenido</h1>
  <button v-if="!authStore.loggedIn" @click="authStore.toggleSession()">Cerrar sesión</button>
  <button v-else @click="authStore.toggleSession()">Iniciar sesión</button>
</template>