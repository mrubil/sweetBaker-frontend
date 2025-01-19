import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// Uvezi Vuetify i osnovne stilove
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Vuetify stilovi
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import router from "./router";

// Kreiraj Vuetify instancu
const vuetify = createVuetify({
  components,
  directives,
});

// Kreiraj Vue aplikaciju
const app = createApp(App);

// Koristi Vuetify kao plugin
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
