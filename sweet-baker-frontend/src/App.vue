<template>
  <v-app>
    <v-main>
      <!-- Navigacija -->
      <v-container>
        <v-btn text to="/" component="router-link">Home</v-btn>
        <v-btn text to="/about" component="router-link">About</v-btn>
      </v-container>

      <!-- Prikaz stranica -->
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import { VApp, VMain, VContainer, VBtn } from "vuetify/components";

export default defineComponent({
  name: "App",
  components: {
    VApp,
    VMain,
    VContainer,
    VBtn,
  },
});
</script>

<style scoped>
/* Stilovi za navigaciju */
</style>
<style scoped>
/* Dodaj stilove ako želiš */
</style>
