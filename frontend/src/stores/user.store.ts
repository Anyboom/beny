import { defineStore } from "pinia";
import { computed } from "vue";
import { useProfileApi } from "@/api/auth/use-auth.api";

export const useUserStore = defineStore("user", () => {
    const { data } = useProfileApi();

    const profile = computed(() => {
        return data.value?.data;
    });

    return {
        profile,
    };
});
