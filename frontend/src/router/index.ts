import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/load-layout.middleware.ts";
import { AppLayoutsEnum } from "@/layouts/types/layouts.types";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/admin",
            component: () => import("../views/admin/BetView.vue"),
            name: "admin-bet-index",
            meta: {
                layout: AppLayoutsEnum.admin,
            },
        },
        {
            path: "/signin",
            component: () => import("../views/auth/SignInView.vue"),
            name: "auth-sign-in",
            meta: {
                layout: AppLayoutsEnum.auth,
            },
        },
        {
            path: "/signup",
            component: () => import("../views/auth/SignUpView.vue"),
            name: "auth-sign-up",
            meta: {
                layout: AppLayoutsEnum.auth,
            },
        },
        {
            path: "/",
            component: () => import("../views/main/HomeView.vue"),
            name: "app-index",
            meta: {
                layout: AppLayoutsEnum.main,
            },
        },
    ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
