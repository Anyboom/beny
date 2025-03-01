import { defineStore } from "pinia";
import { useFindAllOfForecasts } from "@/api/forecast/use-forecast.api";
import type { ForecastEntity } from "@/entities/forecast.entity";
import { computed } from "vue";

export const useForecastStore = defineStore("forecast", () => {
  const { data } = useFindAllOfForecasts();

  const values = computed<ForecastEntity[]>(() => data.value?.data ?? []);

  return { values };
});
