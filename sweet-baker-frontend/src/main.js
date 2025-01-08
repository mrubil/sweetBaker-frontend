import { createApp } from "vue";
import App from "./App.vue";

// Uvezi Vuetify i osnovne stilove
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Vuetify stilovi

import router from "./router";

// Kreiraj Vuetify instancu
const vuetify = createVuetify();

// Kreiraj Vue aplikaciju
const app = createApp(App);

// Koristi Vuetify kao plugin
app.use(vuetify);
app.use(router);

app.mount("#app");
