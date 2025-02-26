import { defineStore } from "pinia";
import { useFindAllOfForecasts } from "@/api/forecast/use-forecast.api";
import type { ForecastEntity } from "@/entities/forecast.entity";

export const useForecastStore = defineStore("forecast", () => {
    const { data } = useFindAllOfForecasts();

    function findById(id: string): ForecastEntity | null {
        try {
            const values: ForecastEntity[] = data.value!.data;

            const entity = values.find(
                (entity: ForecastEntity) => entity.id === id,
            );

            return entity || null;
        } catch {
            return null;
        }
    }

    return { data, findById };
});
