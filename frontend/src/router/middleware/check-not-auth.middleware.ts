import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import { RouteNamesEnum } from "@/router/types/router.types";

export function checkNotAuthMiddleware(
    route: RouteLocationNormalized,
    next: NavigationGuardNext,
): void {
    const authStore = useAuthStore();

    if (route.meta.missPageIfAuth && authStore.getToken.value) {
        next({
            replace: true,
            name: RouteNamesEnum.adminIndex,
        });
    }

    next(true);
}
