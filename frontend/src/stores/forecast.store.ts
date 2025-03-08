import { defineStore } from "pinia";
import type { ForecastEntity } from "@/entities/forecast.entity";
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { useForecastKeys } from "@/api/forecast/use-forecast.keys";
import { findAllOfForecastsApi } from "@/api/forecast/forecast.api";

export const useForecastStore = defineStore("forecast", () => {
  const { data } = useQuery({
    queryKey: [useForecastKeys.FIND_ALL],
    queryFn: () => findAllOfForecastsApi(),
    retry: 2,
    retryDelay: 60000,
    staleTime: 5 * 60000,
  });

  const values = computed<ForecastEntity[]>(() => data.value?.data ?? []);

  return { values };
});
