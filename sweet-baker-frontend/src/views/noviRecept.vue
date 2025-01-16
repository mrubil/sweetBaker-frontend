<template>
  <body>
    <v-sheet class="my-12 mx-auto" width="350">
      <h2 class="mb-4">Novi recept</h2>
      <v-form @submit.prevent>
        <h3>Naslov</h3>
        <v-text-field rounded flat label="npr. Kolač od jabuka"></v-text-field>
        <h3>Kratki opis</h3>

        <v-textarea
          rounded
          label="Ukratko opiši svoj recept."
          row-height="25"
          rows="3"
          variant="outlined"
          auto-grow
          shaped
        ></v-textarea>
        <h3>Sastojci</h3>
        <v-text-field rounded label="Dodaj sastojke"></v-text-field>
        <v-btn rounded class="mt-2" type="submit" block>Spremi</v-btn>
      </v-form>
    </v-sheet>
  </body>
</template>

<script>
export default {
  name: "noviRecept",
};
</script>

<style></style>
