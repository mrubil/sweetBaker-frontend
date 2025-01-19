<template>
  <body>
    <v-card flat class="px-4 py-2"
      ><h2>Recepti</h2>
      <v-row justify="center" class="my-4">
        <v-col
          v-for="recept in najnovijiRecepti"
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
  name: "sviRecepti",
  components: { Recept },
  setup() {
    const recipeStore = useRecipeStore();
    const najnovijiRecepti = computed(() => recipeStore.najnovijiRecepti);
    return { najnovijiRecepti };
  },
};
</script>
