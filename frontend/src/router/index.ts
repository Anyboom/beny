import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/load-layout.middleware";
import { AppLayoutsEnum } from "@/layouts/types/layouts.types";
import { checkAuthMiddleware } from "@/router/middleware/check-auth.middleware";
import { checkNotAuthMiddleware } from "@/router/middleware/check-not-auth.middleware";
import { RouteNamesEnum } from "@/router/types/router.types";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/admin",
      component: () => import("../views/admin/BetView.vue"),
      name: RouteNamesEnum.adminIndex,
      meta: {
        layout: AppLayoutsEnum.admin,
        auth: true,
      },
    },
    {
      path: "/admin/create",
      component: () => import("../views/admin/BetCreateView.vue"),
      name: RouteNamesEnum.adminCreate,
      meta: {
        layout: AppLayoutsEnum.admin,
        auth: true,
      },
    },
    {
      path: "/sign-in",
      component: () => import("../views/auth/SignInView.vue"),
      name: RouteNamesEnum.signIn,
      meta: {
        layout: AppLayoutsEnum.auth,
        missPageIfAuth: true,
      },
    },
    {
      path: "/sign-up",
      component: () => import("../views/auth/SignUpView.vue"),
      name: RouteNamesEnum.signUp,
      meta: {
        layout: AppLayoutsEnum.auth,
        missPageIfAuth: true,
      },
    },
    {
      path: "/",
      component: () => import("../views/main/HomeView.vue"),
      name: RouteNamesEnum.index,
      meta: {
        layout: AppLayoutsEnum.main,
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);
router.beforeEach((to, _, next) => checkNotAuthMiddleware(to, next));
router.beforeEach((to, _, next) => checkAuthMiddleware(to, next));

export default router;
