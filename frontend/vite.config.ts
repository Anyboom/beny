import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

//eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import eslint from "vite-plugin-eslint";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools(), eslint()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    server: {
        port: 8080,
        host: "0.0.0.0",
        allowedHosts: true,
    },
});
