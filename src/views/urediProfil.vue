<template>
  <body>
    <v-sheet class="my-12 mx-auto" width="350">
      <v-form @submit.prevent>
        <v-text-field label="Ime i prezime"></v-text-field>
        <v-text-field label="Korisničko ime"></v-text-field>
        <v-btn class="mt-2" type="submit" block>Spremi</v-btn>
      </v-form>
    </v-sheet>
  </body>
</template>

<script>
export default {
  name: "urediProfil",
};
</script>
