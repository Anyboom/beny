import { defineStore } from "pinia";
import { useFindAllOfSports } from "@/api/sport/use-sport.api";
import type { SportEntity } from "@/entities/sport.entity";
import { computed } from "vue";

export const useSportStore = defineStore("sport", () => {
  const { data } = useFindAllOfSports();

  const values = computed<SportEntity[]>(() => data.value?.data ?? []);

  return { values };
});
