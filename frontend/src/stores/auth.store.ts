import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const accessToken = ref<string | null>(null);

    if (localStorage.getItem("token")) {
        accessToken.value = localStorage.getItem("token");
    }

    function removeToken() {
        accessToken.value = null;
        localStorage.removeItem("token");
    }

    function setToken(token: string) {
        accessToken.value = token;
        localStorage.setItem("token", token);
    }

    return {
        removeToken,
        setToken,
        accessToken,
    };
});
