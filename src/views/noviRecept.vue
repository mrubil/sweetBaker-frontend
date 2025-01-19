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
      <v-form @submit.prevent>
        <h3>Naslov</h3>
        <v-text-field
          variant="solo"
          rounded
          label="npr. Kolač od jabuka"
        ></v-text-field>
        <h3>Kratki opis</h3>

        <v-textarea
          rounded
          label="Ukratko opiši svoj recept."
          row-height="25"
          rows="3"
          variant="solo
          "
          auto-grow
          shaped
        ></v-textarea>
        <h3>Upute</h3>

        <v-textarea
          rounded
          label="Dodaj upute"
          row-height="25"
          rows="3"
          variant="solo
          "
          auto-grow
          shaped
        ></v-textarea>
        <h3>Sastojci</h3>
        <v-textarea
          rounded
          label="Dodaj sastojke"
          row-height="25"
          rows="2"
          variant="solo"
          auto-grow
          shaped
        ></v-textarea>
        <v-file-input
          rounded
          accept="image/png, image/jpeg, image/bmp"
          label="Učitaj fotografiju"
          prepend-icon=""
          prepend-inner-icon="mdi-camera"
          variant="solo-outlined"
        ></v-file-input>
        <v-btn size="large" color="#FF1744" rounded class="mt-2" type="submit"
          >Spremi</v-btn
        >
      </v-form>
    </v-sheet>
  </body>
</template>

<script>
export default {
  name: "noviRecept",
  methods: {
    natrag() {
      this.$router.go(-1);
    },
  },
};
</script>
