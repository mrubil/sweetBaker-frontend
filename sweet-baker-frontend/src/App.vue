<template>
  <v-app>
    <v-main>
      <v-app-bar style="height: 60px">
        <router-link to="/" class="v-btn text pl-4">
          <span class="sweet">Sweet</span>
          <span class="baker">Baker</span>
        </router-link>
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
        <router-link to="/mojProfil" class="v-btn text pr-4 text-black">
          MOJ PROFIL
        </router-link>
      </v-app-bar>

      <router-view />

      <v-navigation-drawer location="left" permanent rail class="pt-10">
        <v-list-item
          class="sidebar"
          to="/sviRecepti"
          active-class="active-link"
        >
          <v-icon>mdi-cupcake</v-icon>
        </v-list-item>

        <v-list-item
          class="sidebar"
          to="/noviRecept"
          active-class="active-link"
        >
          <v-icon>mdi-plus</v-icon>
        </v-list-item>

        <v-list-item class="sidebar" to="/rang" active-class="active-link">
          <v-icon>mdi-silverware-variant</v-icon>
        </v-list-item>
      </v-navigation-drawer>
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
.sidebar {
  padding: 18px;
  margin-bottom: 10px;
}
</style>
