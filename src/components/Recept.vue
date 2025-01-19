<template>
  <v-card class="mx-auto my-auto" max-width="200">
    <v-img height="200" :src="recept.slika || defaultImage" cover></v-img>

    <v-card-item>
      <v-card-title class="font-weight-bold" style="white-space: normal">{{
        recept.naslov
      }}</v-card-title>

      <v-rating
        v-model="recept.rating"
        active-color="red-accent-4"
        color="red-lighten-1"
        class="ma-1"
        size="20"
        readonly
      ></v-rating
      ><span class="text-grey-darken-1 text-caption ml-2">
        ({{ recept.rating }})
      </span>
    </v-card-item>

    <v-card-text>
      <div>@{{ username }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
  </v-card>
</template>

<script>
import { useRecipeStore } from "@/stores/store";

export default {
  name: "Recept",
  props: {
    recept: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const recipeStore = useRecipeStore();
    const username = recipeStore.getUserById(props.recept.userId)?.username;
    const defaultImage = "https://cdn.vuetifyjs.com/images/cards/cooking.png";
    return { username, defaultImage };
  },
};
</script>
