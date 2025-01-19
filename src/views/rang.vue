<template>
  <v-container>
    <v-carousel show-arrows="hover" cycle hide-delimiter-background>
      <v-carousel-item
        src="https://glutenfreecuppatea.co.uk/wp-content/uploads/2020/10/gluten-free-christmas-cake-recipe-2.jpg"
      >
        <v-row class="fill-height" justify="center">
          <v-col class="text-center">
            <div class="text-box">
              <h2 class="white--text display-2">Izazov: Zimska torta</h2>
              <p class="white--text">Napravi najljepšu zimsku tortu</p>
              <v-btn rounded color="#FF1744" class="mt-4"> Opširnije </v-btn>
            </div></v-col
          >
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        src="https://cdn.shopify.com/s/files/1/0804/0808/4768/files/397.png?v=1731323883"
      >
        <v-row class="fill-height" justify="center">
          <v-col class="text-center">
            <div class="text-box">
              <h2 class="white--text display-2">
                Izazov: Najbolji božićni medenjak
              </h2>
              <p class="white--text">Napravi najljepši božićni medenjak</p>
              <v-btn rounded color="#FF1744" class="mt-4"> Opširnije </v-btn>
            </div></v-col
          >
        </v-row>
      </v-carousel-item>
      <v-carousel-item
        src="https://www.marthastewart.com/thmb/BkIUw6lvZMrOIQrzv-0jgquPTEQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/edible-flowers-cupcakes-a104524_horiz-355b017d34c846a8b4ccbf99dbe5117d.jpgitokDjVv9Fsy"
      >
        <v-row class="fill-height" justify="center">
          <v-col class="text-center">
            <div class="text-box">
              <h2 class="white--text display-2">Izazov: Proljetni muffin</h2>
              <p class="white--text">Napravi cvjetne muffine</p>
              <v-btn rounded color="#FF1744" class="mt-4"> Opširnije </v-btn>
            </div></v-col
          >
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <div class="top-korisnici">
      <h2>Najpopularniji slastičari</h2>
      <v-row justify="center" class="my-0">
        <v-col
          v-for="user in users.slice(0, 5)"
          :key="user.id"
          cols="12"
          md="2"
          sm="4"
        >
          <Profile :user="user" />
        </v-col>
      </v-row>
    </div>
    <div class="najbolji-recepti">
      <h2>Najpopularniji recepti</h2>
      <v-row justify="center" class="my-4">
        <v-col
          v-for="recept in najboljiRecepti"
          :key="recept.id"
          cols="12"
          md="2"
          sm="4"
        >
          <Recept :recept="recept" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { useRecipeStore } from "@/stores/store";
import Recept from "@/components/Recept.vue";
import { computed } from "vue";
import Profile from "../components/Profile.vue";

export default {
  name: "rang",
  components: { Recept, Profile },

  setup() {
    const recipeStore = useRecipeStore();
    const najboljiRecepti = computed(() => recipeStore.najboljiRecepti);
    const users = computed(() => recipeStore.users);
    return { najboljiRecepti, users };
  },
};
</script>
<style>
.v-carousel-item {
  height: 400px;
}

.v-img {
  object-fit: cover;
}
.text-box {
  background: #ffffff95;
  padding: 10px;
  border-radius: 8px;
}
</style>
