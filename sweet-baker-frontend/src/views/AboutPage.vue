<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto my-5" max-width="600">
          <v-card-title>O nama</v-card-title>
          <v-card-text>
            <router-view />
            Ovdje možeš napisati informacije o aplikaciji.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
