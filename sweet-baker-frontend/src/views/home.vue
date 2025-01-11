<template>
  <body>
    <v-row
      style="
        height: 300px;
        background: linear-gradient(to right, #e1f5fe, #0000, #ffcdd2);
      "
    >
      <v-col></v-col>
      <v-col>
        <v-img max-height="100vh" :src="cokoladnatorta" cover></v-img
      ></v-col>
    </v-row>

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
import cokoladnatorta from "@/assets/cake4.png";

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
</style>
