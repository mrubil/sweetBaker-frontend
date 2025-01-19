<template>
  <div class="profil">
    <v-row justify="center" class="pt-6">
      <v-avatar size="130">
        <v-img
          :src="
            user.slikaProfila ||
            'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png'
          "
        ></v-img>
      </v-avatar>
    </v-row>
    <h3 class="username">@{{ user.username }}</h3>
  </div>
</template>

<script>
export default {
  name: "profil",
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.profil {
  text-align: center;
  padding-bottom: 16px;
}

.username {
  margin-top: 8px;
  font-size: 1.2rem;
}
</style>
