//komponenta koja prikazuje sliku korisnika i njegovo ime
<template>
  <body>
    <v-row class="rows pt-6">
      <v-avatar size="130">
        <v-img
          :src="user.slikaProfila || 'https://via.placeholder.com/130'"
        ></v-img>
      </v-avatar>
      <h3>@{{ user.username }}</h3>
    </v-row>
  </body>
</template>

<script>
export default {
  name: "profil",
  props: {
    user: Object,
  },
};
</script>
