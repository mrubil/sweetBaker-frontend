import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipes", {
  state: () => ({
    users: [
      {
        id: 1,
        ime: "Martina Rubil",
        username: "martinar",
        slikaProfila:
          "https://media.istockphoto.com/id/480379746/photo/cook-decorating-a-plate-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=ZfRzr7xqK9a89DzUZ1h-oEHUEzi6FF0hiDpljIdtgt0=",
      },
      {
        id: 2,
        ime: "Ivana Horvat",
        username: "ivana_h",
        slikaProfila:
          "https://st3.depositphotos.com/5586578/14717/i/1600/depositphotos_147174929-stock-photo-girl-cooking-sweet-dessert-culinary.jpg ",
      },
      {
        id: 3,
        ime: "Petar Marinić",
        username: "petar2005",
        slikaProfila:
          "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      },
      {
        id: 4,
        ime: "Marija Martić",
        username: "marija_m",
        slikaProfila:
          "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
      },
      {
        id: 5,
        ime: "Zorica Zorić",
        username: "zoricaa",
        slikaProfila:
          "https://sarahclaysocial.com/wp-content/uploads/2020/10/sarah-clay-3.jpg",
      },
    ],
    recipes: [
      {
        id: 1,
        naslov: "čokoladna torta",
        opis: "Ukusna čokoladna torta sa ganache kremom",
        upute: "",
        sastojci: "",
        slika:
          "https://funcakes.com/content/uploads/2022/07/Fun-Cakes-20201105-Ganache-02-1000x667.jpg",
        userId: 1,
        rating: 4.0,
        datum: new Date("2023-01-12").toISOString(),
      },
      {
        id: 2,
        naslov: "Cheesecake od jagode",
        opis: "Ukusni cheesecake od jagode",
        upute: "",
        sastojci: "",
        slika:
          "https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3184-strawberry-cheesecake.jpg",
        userId: 1,
        rating: 5.0,
        datum: new Date("2025-01-13").toISOString(),
      },
      {
        id: 3,
        naslov: "Desert u čaši",
        opis: "Desert u čaši - savršen spoj karamele i čokolade!",
        slika:
          "https://insanelygoodrecipes.com/wp-content/uploads/2021/02/Sweet-Homemade-Chocolate-Layered-Dessert.jpg",
        userId: 1,
        rating: 4.8,
        datum: new Date("2025-01-13").toISOString(),
      },
      {
        id: 4,
        naslov: "Mađarica",
        opis: "Ukusna mađarica s domaćom korom",
        slika:
          "https://hr.oetker-recepti.com/wp-content/uploads/2021/03/Capture.png",
        userId: 1,
        rating: 4.7,
        datum: new Date("2025-01-14").toISOString(),
      },
      {
        id: 5,
        naslov: "Puding torta od kruške",
        opis: "Ukusna puding torta",
        slika:
          "https://www.seasonsandsuppers.ca/wp-content/uploads/2020/09/pear-pudding-cake-1200.jpg",
        userId: 1,
        rating: 4.7,
        datum: new Date("2025-01-10").toISOString(),
      },
      {
        id: 6,
        naslov: "Čokoladni mousse",
        opis: "Najbolji čokoladni mousse",
        slika:
          "https://assets.epicurious.com/photos/58bdacd292eece36cc1d3f7b/1:1/w_2560%2Cc_limit/chocolate-satin-mousse-patricia-wells-030617.jpg",
        userId: 1,
        rating: 4.7,
        datum: new Date("2025-01-17").toISOString(),
      },
      {
        id: 7,
        naslov: "Mont Blanc desert",
        opis: "",
        slika:
          "https://www.bestofhungary.co.uk/cdn/shop/articles/Mont_Blanc_Dessert_2.jpg?v=1652696974",
        userId: 1,
        rating: 4.7,
        datum: new Date("2024-01-18").toISOString(),
      },
    ],
    currentUser: {
      id: 1,
      name: "Martina Rubil",
      slikaProfila:
        "https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A=",
      username: "martinar",
    },
  }),
  getters: {
    sviRecepti: (state) => state.recipes,
    userRecipes: (state) =>
      state.recipes.filter((recipe) => recipe.userId === state.currentUser.id),
    getUserById: (state) => (id) => state.users.find((user) => user.id === id),
    najnovijiRecepti: (state) => {
      return state.recipes.sort(
        (a, b) => new Date(b.datum) - new Date(a.datum)
      );
    },
    najboljiRecepti: (state) => {
      return state.recipes.sort((a, b) => b.rating - a.rating).slice(0, 5);
    },
  },
});
