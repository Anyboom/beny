import { defineStore } from "pinia";
import type { SportEntity } from "@/entities/sport.entity";
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { useSportKeys } from "@/api/sport/use-sport.keys";
import { findAllOfSportsApi } from "@/api/sport/sport.api";

export const useSportStore = defineStore("sport", () => {
  const { data } = useQuery({
    queryKey: [useSportKeys.FIND_ALL],
    queryFn: () => findAllOfSportsApi(),
    retry: 2,
    retryDelay: 60000,
    staleTime: 5 * 60000,
  });

  const values = computed<SportEntity[]>(() => data.value?.data ?? []);

  return { values };
});
