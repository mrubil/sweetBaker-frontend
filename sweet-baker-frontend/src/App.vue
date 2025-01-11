<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <v-img
          class="mx-4"
          src="/favicon.png"
          max-width="32"
          max-height="32"
        ></v-img>
        <v-btn variant="plain" text to="/" component="router-link"
          >Sweet Baker</v-btn
        >
        <v-spacer></v-spacer>

        <v-text-field
          prepend-inner-icon="mdi-magnify"
          label="Pretraživanje"
          clearable
          rounded
          variant="outlined"
        ></v-text-field>

        <v-spacer></v-spacer>
        <v-btn variant="plain" text to="/profile" component="router-link"
          >Moj profil</v-btn
        >
      </v-app-bar>

      <router-view />
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

<style></style>
