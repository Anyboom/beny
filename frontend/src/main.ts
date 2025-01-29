import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";

import "./assets/tailwind.css";
import "./assets/index.css";

const app = createApp(App);

app.use(PrimeVue, {
    theme: "none",
});

app.use(router);

app.mount("#app");
