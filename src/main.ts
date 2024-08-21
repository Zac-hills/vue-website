import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
// eslint-disable-next-line
//@ts-ignore
import VueMobileDetection from "vue-mobile-detection";

createApp(App)
  .use(PrimeVue, { theme: { preset: Aura } })
  .use(VueMobileDetection)
  .mount("#app");
