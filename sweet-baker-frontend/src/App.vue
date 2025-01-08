<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card class="mx-auto my-5" max-width="500" outlined>
          <v-card-title class="text-h4">Dobrodošli u Vuetify</v-card-title>
          <v-card-text>Ovo je osnovni primjer Vuetify dizajna.</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="showAlert">Klikni me</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Uvezi komponente koje koristiš iz Vuetify
import {
  VApp,
  VMain,
  VContainer,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VBtn,
} from "vuetify/components";

export default defineComponent({
  name: "App",
  components: {
    VApp,
    VMain,
    VContainer,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VBtn,
  },
  methods: {
    showAlert() {
      alert("Pozdrav iz Vuetify aplikacije!");
    },
  },
});
</script>

<style scoped>
/* Dodaj stilove ako želiš */
</style>
