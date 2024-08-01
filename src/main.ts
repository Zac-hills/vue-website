import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

createApp(App)
  .use(PrimeVue, { theme: { preset: Aura } })
  .mount("#app");
