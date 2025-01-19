import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipes", {
  state: () => ({
    users: [
      {
        id: 1,
        ime: "Martina Rubil",
        username: "martinar",
      },
      {
        id: 2,
        ime: "Ivan Horvat",
        username: "ivan_h",
      },
      {
        id: 3,
        ime: "Petar Marinić",
        username: "petar2005",
      },
      {
        id: 4,
        ime: "Marija Martić",
        username: "marija_m",
      },
      {
        id: 5,
        ime: "Zorica Zorić",
        username: "zoricaa",
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
