import type { VueElement } from "vue";
import type { AppLayoutsEnum } from "@/layouts/types/layouts.types";

declare module "vue-router" {
  interface RouteMeta {
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
  }
}
