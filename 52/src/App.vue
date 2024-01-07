<template>
  <nav>
    <router-link :to="{name: 'home'}">HOME</router-link>
    <router-link :to="{name: 'perfil'}">PERFIL</router-link>
  </nav>
  <router-view></router-view>
</template>