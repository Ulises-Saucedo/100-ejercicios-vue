<template>
  <nav>
    <router-link :to="{ name: 'favoritos', query: {cadena: 'hbo'} }">HBO</router-link>
    <router-link :to="{ name: 'favoritos', query: {cadena: 'netflix'} }">Netflix</router-link>
  </nav>
  <router-view></router-view>
</template>