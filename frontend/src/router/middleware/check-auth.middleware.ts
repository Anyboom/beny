import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuthStore } from "@/stores/auth.store.ts";
import { RouteNamesEnum } from "@/router/types/router.types.ts";

export function checkAuthMiddleware(
    route: RouteLocationNormalized,
    next: NavigationGuardNext,
) {
    const authStore = useAuthStore();

    if (route.meta.auth && !authStore.accessToken) {
        next({
            replace: true,
            name: RouteNamesEnum.signIn,
        });
    }

    next(true);
}
