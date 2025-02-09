import type { VueElement } from "vue";
import type { AppLayoutsEnum } from "@/layouts/types/layouts.types";

declare module "vue-router" {
    interface RouteMeta {
        layout?: AppLayoutsEnum;
        layoutComponent?: VueElement;
    }
}

export enum RouteNamesEnum {
    adminIndex = "admin-index",
    index = "app-index",
    signIn = "auth-sign-in",
    signUp = "auth-sign-up",
}
