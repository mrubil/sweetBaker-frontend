<template>
  <body>
    <v-card flat>
      <v-col
        ><v-fab
          class="mt-6 pt-2 ml-4"
          icon="mdi-arrow-left-thin"
          location="bottom start"
          size="large"
          absolute
          offset
          @click="natrag"
        ></v-fab
        ><v-row class="rows pt-6">
          <v-avatar size="130" color="#ff1744">
            <v-icon icon="mdi-account-circle" size="110"></v-icon></v-avatar
        ></v-row>
        <v-row class="rows"><h1>Martina Rubil</h1></v-row>
        <v-row class="rows pb-2"><h3 style="color: grey">@username</h3></v-row>
      </v-col>
    </v-card>

    <v-card flat class="px-4"><h2>Recepti</h2></v-card>
  </body>
</template>

<script>
export default {
  name: "mojProfil",
  methods: {
    natrag() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.rows {
  justify-content: center;
  padding-top: 10px;
}
</style>
