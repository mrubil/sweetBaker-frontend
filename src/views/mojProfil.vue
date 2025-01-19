<template>
  <body>
    <v-card flat>
      <v-col
        ><v-fab
          class="mt-6 pt-2 ml-4"
          icon="mdi-arrow-left-thin"
          location="bottom start"
          size="large"
          absolute
          offset
          @click="natrag"
        ></v-fab
        ><v-row class="rows pt-6">
          <v-avatar size="130" color="#ff1744">
            <v-icon icon="mdi-account-circle" size="110"></v-icon></v-avatar
        ></v-row>
        <v-row class="rows"
          ><h1>{{ currentUser.name }}</h1></v-row
        >
        <v-row class="rows pb-2"><h3 style="color: grey">@username</h3></v-row>
      </v-col>
    </v-card>

    <v-card flat class="px-4 py-2"
      ><h2>Recepti</h2>
      <v-row justify="center" class="my-4">
        <v-col
          v-for="recept in userRecipes"
          :key="recept.id"
          cols="12"
          md="2"
          sm="4"
        >
          <Recept :recept="recept" />
        </v-col>
      </v-row>
    </v-card>
  </body>
</template>

<script>
import { useRecipeStore } from "@/stores/store";
import Recept from "../components/Recept.vue";
import { computed } from "vue";

export default {
  name: "mojProfil",
  components: { Recept },
  setup() {
    const recipeStore = useRecipeStore();

    // Koristimo computed za reaktivno praćenje recepata i korisnika
    const userRecipes = computed(() => recipeStore.userRecipes);
    const currentUser = computed(() => recipeStore.currentUser);

    return { userRecipes, currentUser };
  },
  methods: {
    natrag() {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
.rows {
  justify-content: center;
  padding-top: 10px;
}
</style>
