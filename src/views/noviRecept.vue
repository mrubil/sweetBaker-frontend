<template>
  <body>
    <v-fab
      class="mt-8 pt-2 ml-4"
      icon="mdi-arrow-left-thin"
      location="bottom start"
      size="large"
      absolute
      offset
      @click="natrag"
    ></v-fab>
    <v-sheet class="my-12 mx-auto" width="350">
      <h2 class="mb-4">Novi recept</h2>
      <v-form @submit.prevent="spremiRecept">
        <h3>Naslov</h3>
        <v-text-field
          v-model="newRecipe.naslov"
          variant="solo"
          rounded
          label="npr. Kolač od jabuka"
        ></v-text-field>

        <h3>Kratki opis</h3>
        <v-textarea
          v-model="newRecipe.opis"
          rounded
          label="Ukratko opiši svoj recept."
          rows="3"
          variant="solo"
          auto-grow
          shaped
        ></v-textarea>

        <h3>Upute</h3>
        <v-textarea
          v-model="newRecipe.upute"
          rounded
          label="Dodaj upute"
          rows="3"
          variant="solo"
          auto-grow
          shaped
        ></v-textarea>

        <h3>Sastojci</h3>
        <v-textarea
          v-model="newRecipe.sastojci"
          rounded
          label="Dodaj sastojke"
          rows="2"
          variant="solo"
          auto-grow
          shaped
        ></v-textarea>

        <v-file-input
          v-model="newRecipe.slika"
          rounded
          accept="image/png, image/jpeg, image/bmp"
          label="Učitaj fotografiju"
          prepend-inner-icon="mdi-camera"
          variant="solo-outlined"
        ></v-file-input>

        <v-btn size="large" color="#FF1744" rounded class="mt-2" type="submit">
          Spremi
        </v-btn>
      </v-form>
    </v-sheet>
  </body>
</template>

<script>
import { useRecipeStore } from "@/stores/store.js";
export default {
  name: "noviRecept",
  data() {
    return {
      newRecipe: {
        naslov: "",
        opis: "",
        upute: "",
        sastojci: "",
        slika: "",
        userId: null, // Will be set to the logged-in user's ID
        rating: 0, // Default rating
        datum: new Date().toISOString(), // Current date
      },
    };
  },

  methods: {
    natrag() {
      this.$router.go(-1);
    },
    async spremiRecept() {
      const recipeStore = useRecipeStore();
      this.newRecipe.userId = recipeStore.currentUser.id; // Link to logged-in user
      recipeStore.dodajRecept(this.newRecipe); // Add the recipe to the store
      this.$router.push("/mojProfil"); // Redirect to recipes page
    },
  },
};
</script>
