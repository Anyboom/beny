import axios, { AxiosError } from "axios";
import router from "@/router";
import { RouteNamesEnum } from "@/router/types/router.types";
import { useUserStore } from "@/stores/user.store";
import { useAuthStore } from "@/stores/auth.store";

const httpClient = axios.create();

httpClient.interceptors.request.use((config) => {
    const authStore = useAuthStore();

    if (authStore.getToken.value) {
        config.headers.Authorization = `Bearer ${authStore.getToken.value}`;
    }

    return config;
});

httpClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const userStore = useUserStore();

        if (error.response?.status === 401) {
            await userStore.logout();
            await router.push({
                name: RouteNamesEnum.signIn,
            });
        }

        return Promise.reject(error);
    },
);

export default httpClient;
