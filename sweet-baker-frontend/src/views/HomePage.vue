<template>
  <body>
    <v-img
      max-height="125"
      src="https://picsum.photos/350/165?random"
      cover
    ></v-img>
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
export default {
  name: "HomePage",
  data: () => ({ rating: 4.8 }),
};
</script>

<style scoped>
body {
  background-color: rgb(255, 255, 255);
  margin: 0;
  min-height: 100vh;
}
</style>
