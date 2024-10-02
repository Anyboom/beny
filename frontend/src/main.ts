import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@/presets/aura";

import App from "./App.vue";
import router from "./router";
import ToastService from "primevue/toastservice";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
});

app.use(ToastService);

app.use(createPinia());
app.use(router);

app.mount("#app");
