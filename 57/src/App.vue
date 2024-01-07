<template>
  <v-app>
    <v-app-bar color="primary" class="flex-grow-0" app dark>
      <v-app-bar-nav-icon icon="fa-solid fa-bars" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-toolbar flat class="transparent" color="teal" dark>
        <v-list v-if="loggedIn">
          <v-list-item @click="loggedIn = !loggedIn">
            <v-icon icon="fa-solid fa-user"></v-icon>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item @click="loggedIn = !loggedIn" >
            <v-icon icon="fa-solid fa-right-from-bracket"></v-icon>
          </v-list-item>
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const drawer = ref(false);
    const loggedIn = ref(false)
    return {
      drawer,
      loggedIn
    };
  },
};
</script>
