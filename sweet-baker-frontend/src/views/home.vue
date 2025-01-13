<template>
  <body>
    <v-container fluid class="pa-0">
      <v-row
        justify="space-between"
        style="
          height: 400px;
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
          <v-img max-height="380" :src="cokoladnatorta" contain></v-img
        ></v-col>
      </v-row>
    </v-container>
    <v-card class="mx-auto my-12" max-width="300">
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
      ></v-img>

      <v-card-item>
        <v-card-title>Čokoladna torta</v-card-title>

        <v-rating
          v-model="rating"
          active-color="red-accent-4"
          color="red-lighten-1"
          class="ma-1"
          density="compact"
          readonly
        ></v-rating>
      </v-card-item>

      <v-card-text>
        <div>user123</div>
      </v-card-text>

      <v-divider class="mx-4 mb-1"></v-divider>
    </v-card>
  </body>
</template>

<script>
import cokoladnatorta from "@/assets/cake2.png";

export default {
  name: "HomePage",
  data: () => ({
    rating: 4.8,
    cokoladnatorta: cokoladnatorta,
  }),
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
</style>
