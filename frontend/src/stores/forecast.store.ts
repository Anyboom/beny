import { defineStore } from "pinia";
import { ForecastEntity } from "@/entities/forecast.entity.ts";
import { ref } from "vue";
import { getForecasts } from "@/api/forecast.api.ts";

export const useForecastStore = defineStore("forecast", () => {
    const forecasts = ref<ForecastEntity[]>([]);

    async function init(): Promise<void> {
        const data: ForecastEntity[] = await getForecasts();
        forecasts.value.push(...data);
    }

    async function getData(): Promise<ForecastEntity[]> {
        if (forecasts.value.length == 0) {
            await init();
        }

        return forecasts.value;
    }

    return { getData };
});
