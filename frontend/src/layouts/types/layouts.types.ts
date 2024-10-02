export enum AppLayoutsEnum {
  main = "main",
  admin = "admin",
  auth = "auth",
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  main: "MainLayout.vue",
  admin: "AdminLayout.vue",
  auth: "AuthLayout.vue",
};
