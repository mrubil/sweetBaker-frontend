import { createRouter, createWebHistory } from "vue-router";

// Uvezi tvoje komponente
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";

// Definiraj rute
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];

// Kreiraj router instancu
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
