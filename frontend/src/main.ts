import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import ruLocale from "@/locales/ru.json";
import "./assets/tailwind.css";
import "./assets/index.css";
import { Tooltip } from "primevue";
import ToastService from "primevue/toastservice";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

const app = createApp(App);

const pinia = createPinia();

const i18n = createI18n({
    locale: "ru",
    messages: {
        ru: ruLocale,
    },
});

app.use(PrimeVue, {
    theme: "none",
});

app.directive("tooltip", Tooltip);

app.use(i18n);
app.use(router);
app.use(ToastService);
app.use(VueQueryPlugin);
app.use(pinia);

app.mount("#app");
