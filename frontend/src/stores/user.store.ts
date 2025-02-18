import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { UserEntity } from "@/entities/user.entity";
import { profileApi } from "@/api/auth/auth.api";

export const useUserStore = defineStore("user", () => {
    const user = ref<UserEntity | null>(null);

    const profile = computed(async () => {
        if (user.value === null) {
            const query = await profileApi();

            user.value = query.data as UserEntity;
        }

        return user;
    });

    return {
        profile,
    };
});
