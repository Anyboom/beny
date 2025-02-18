import axios from "axios";
import { useAuthStore } from "@/stores/auth.store";

const httpClient = axios.create();

httpClient.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();

        if (authStore.getToken.value) {
            config.headers.Authorization = `Bearer ${authStore.getToken.value}`;
        }

        return config;
    },
    (error) => Promise.reject(error),
);

export default httpClient;
