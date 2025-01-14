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
          variant="solo"
          density="compact"
          class="pt-4"
        ></v-text-field>

        <v-spacer></v-spacer>
        <v-btn variant="plain" text to="/mojProfil" component="router-link"
          >Moj profil</v-btn
        >
      </v-app-bar>

      <router-view />

      <v-bottom-navigation>
        <v-btn value="recipes">
          <v-icon>mdi-cupcake</v-icon>

          <span>Recepti</span>
        </v-btn>

        <v-btn value="plus">
          <v-icon>mdi-plus</v-icon>

          <span>Novi recept</span>
        </v-btn>

        <v-btn value="natjecanje">
          <v-icon>mdi-silverware-variant</v-icon>

          <span>Natjecanja</span>
        </v-btn>
      </v-bottom-navigation>
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
