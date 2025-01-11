import { createRouter, createWebHistory } from "vue-router";

// Uvezi tvoje komponente
import home from "../views/home.vue";
import NoviRecept from "../views/noviRecept.vue";
import PregledRecepta from "../views/pregledRecepta.vue";
import UrediRecept from "../views/urediRecept.vue";
import UrediProfil from "../views/urediProfil.vue";
import MojProfil from "../views/mojProfil.vue";

// Definiraj rute
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/mojProfil",
    name: "mojProfil",
    component: MojProfil,
  },
  {
    path: "/noviRecept",
    name: "noviRecept",
    component: NoviRecept,
  },
  {
    path: "/pregledRecepta",
    name: "pregledRecepta",
    component: PregledRecepta,
  },
  {
    path: "/urediRecept",
    name: "urediRecept",
    component: UrediRecept,
  },
  {
    path: "/urediProfil",
    name: "urediProfil",
    component: UrediProfil,
  },
];

// Kreiraj router instancu
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
