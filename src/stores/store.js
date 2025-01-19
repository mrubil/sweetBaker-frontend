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
        upute:
          "1. Zagrijte pećnicu na 180°C. 2. Pomiješajte brašno, kakao i prašak za pecivo. 3. U drugoj posudi umutite jaja sa šećerom i dodajte otopljeni maslac. 4. Spojite sve sastojke i izlijevajte smjesu u kalup. 5. Pecite 30 minuta. 6. Za ganache kremu, zagrijte vrhnje i prelijte preko nasjeckane čokolade. Miješajte dok se čokolada ne otopi. 7. Ohladite tortu i prelijte ganache kremom.",
        sastojci:
          "300g brašna, 50g kakaa, 1 prašak za pecivo, 4 jaja, 200g šećera, 200g maslaca, 200g čokolade za ganache, 200ml vrhnja za šlag.",

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
        upute:
          "1. Pripremite koru od keksa i maslaca, istresite u kalup i poravnajte. 2. Umutite krem sir s šećerom i vanilijom. 3. Dodajte jaja i dobro izmiješajte. 4. Ulijte smjesu u kalup i pecite 60 minuta na 160°C. 5. Ohladite, a zatim prelijte jagodnom glazurom koja je napravljena od kuhane jagode i šećera. 6. Ohladite tortu prije serviranja.",
        sastojci:
          "200g keksa, 100g maslaca, 400g krem sira, 200g šećera, 3 jaja, 300g jagoda, 50g šećera za glazuru.",

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
        upute:
          "1. U čaše stavite sloj kisele pavlake, zatim preliti karamelom. 2. Na karamelu stavite sloj čokolade, a zatim još jedan sloj pavlake. 3. Na vrh dodajte komadiće karamela ili čokolade. 4. Ostavite desert u hladnjaku nekoliko sati prije serviranja.",
        sastojci:
          "200g kisele pavlake, 100g karamela, 100g tamne čokolade, 50g mliječne čokolade.",

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
        upute:
          "1. Prvo pripremite koru od bjelanjaka i šećera, pa je ispecite. 2. Pomiješajte mljevene orahe sa šećerom i dodajte rum. 3. Na ohlađenu koru stavite kremu od čokolade. 4. Pecite još 10 minuta na 180°C. 5. Ohladite i pospite šećerom u prahu prije posluživanja.",
        sastojci:
          "4 bjelanjka, 200g šećera, 200g mljevenih oraha, 100g čokolade za kremu, 100g maslaca, 1 žlica ruma.",

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
        upute:
          "1. Pripremite puding od vanilije prema uputama na pakiranju. 2. Kružite kriške kruške na dno kalupa. 3. Prelijte sa pripremljenim pudingom. 4. Pecite 40 minuta na 180°C. 5. Ohladite i poslužite hladnu.",
        sastojci:
          "2 kruške, 1 pakiranje pudinga od vanilije, 100g šećera, 500ml mlijeka.",
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
        upute:
          "1. Otvorite čokoladu i otopite je na pari. 2. Umutite slatku pavlaku dok ne postane čvrsta. 3. Pomiješajte otopljenu čokoladu s pavlakom. 4. Stavite smjesu u čaše i ohladite barem 2 sata prije posluživanja.",
        sastojci: "200g tamne čokolade, 300ml slatkog vrhnja, 50g šećera.",

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
        upute:
          "1. Prvo pripremite meringu tako da umutite bjelanjke s malo šećera dok ne postanu čvrsti. 2. Oblikujte male kuglice ili diskove od meringe na papiru za pečenje i pecite u prethodno zagrijanoj pećnici na 100°C oko sat i pol. 3. U međuvremenu, pripremite kremu od kestena (marone) miješanjem kuhanih kestena s šećerom i mlijekom. 4. Na dno tanjura stavite meringu, preko nje kremu od kestena, a na vrhu ukrasite šlagom i ribanim čokoladama. 5. Hladite desert prije posluživanja.",
        sastojci:
          "4 bjelanjka, 200g šećera, 500g kestena (ili kupljena krema od kestena), 200ml mlijeka, 200ml slatke pavlake, 50g ribane čokolade.",

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
