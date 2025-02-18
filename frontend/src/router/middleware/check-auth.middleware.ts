import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import { RouteNamesEnum } from "@/router/types/router.types";

export function checkAuthMiddleware(
    route: RouteLocationNormalized,
    next: NavigationGuardNext,
): void {
    const authStore = useAuthStore();

    if (route.meta.auth && !authStore.getToken.value) {
        next({
            replace: true,
            name: RouteNamesEnum.signIn,
        });
    }

    next(true);
}
