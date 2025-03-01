import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const accessToken = ref<string | null>(null);

  function removeToken() {
    accessToken.value = null;
    localStorage.removeItem("token");
  }

  function setToken(token: string) {
    accessToken.value = token;
    localStorage.setItem("token", token);
  }

  const getToken = computed(() => {
    if (localStorage.getItem("token") && accessToken.value == null) {
      accessToken.value = localStorage.getItem("token");
    }

    return accessToken;
  });

  return {
    removeToken,
    setToken,
    getToken,
  };
});
