<template>
  <v-app>
    <v-main>
      <v-app-bar style="height: 60px">
        <v-btn variant="plain" text to="/" component="router-link"
          ><span class="sweet">Sweet</span>
          <span class="baker">Baker</span></v-btn
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
        <v-btn variant="plain" text to="/mojProfil" component="router-link"
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
import { store } from "./store";

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

<style>
.sweet {
  color: #ff1744;
}
.baker {
  color: rgb(0, 0, 0);
}
</style>
