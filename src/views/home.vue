<template>
  <body>
    <v-container fluid class="pa-2">
      <v-row
        justify="space-between"
        style="
          height: 300px;
          background: linear-gradient(to right, #e1f5fe, #0000, #ffcdd2);
        "
      >
        <v-col align-self="center" class="pa-4 ma-2">
          <h1 class="welcome">
            Inspiriraj se i pripremaj savršene deserte svaki dan!
          </h1>
          <br />
          <p>
            <v-btn color="#FF1744" rounded class="ml-5" style="color: white"
              >Registriraj se</v-btn
            ><v-btn rounded class="ml-5">Prijava</v-btn>
          </p>
        </v-col>
        <v-col align-self="center" class="pa-3 ma-2">
          <v-img max-height="280" :src="cokoladnatorta" contain></v-img
        ></v-col>
      </v-row>
    </v-container>
    <div class="main">
      <div class="najbolji-recepti">
        <h2>Najbolji recepti</h2>
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
      <div class="top-korisnici">
        <h2>Istražite recepte najpopularnijih slastičara</h2>
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
    </div>
  </body>
</template>

<script>
import cokoladnatorta from "@/assets/cake2.png";
import { useRecipeStore } from "@/stores/store";
import Recept from "@/components/Recept.vue";
import { computed } from "vue";
import Profile from "../components/Profile.vue";

export default {
  name: "HomePage",
  components: { Recept, Profile },
  data: () => ({
    rating: 4.8,
    cokoladnatorta: cokoladnatorta,
  }),
  setup() {
    const recipeStore = useRecipeStore();
    const najboljiRecepti = computed(() => recipeStore.najboljiRecepti);
    const users = computed(() => recipeStore.users);
    return { najboljiRecepti, users };
  },
};
</script>

<style scoped>
body {
  background-color: rgb(255, 255, 255);
  margin: 0;
  min-height: 100vh;
}
.welcome {
  font-weight: bold;
  color: #000000;
  margin-left: 20px;
}
.main {
  padding: 20px;
  margin-left: 20px;
}
</style>
