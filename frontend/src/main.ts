import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@/presets/aura";

import router from "./router";
import ToastService from "primevue/toastservice";
import "primeicons/primeicons.css";
import App from "@/App.vue";

const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true,
    pt: Aura,
});

app.use(ToastService);

app.use(createPinia());
app.use(router);

app.mount("#app");
