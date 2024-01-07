<template>
  <v-app>
    <v-app-bar color="primary" class="flex-grow-0" app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Coding Beauty</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Learning Vuetify</v-list-item-title>
          <v-list-item-subtitle> Using Navigation drawers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const drawer = ref(false);
    const menuCollapse = ref(false);
    return {
      drawer,
      menuCollapse,
    };
  },
};
</script>
