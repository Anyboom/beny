import { defineStore } from "pinia";
import { useFindAllOfSports } from "@/api/sport/use-sport.api";
import type { SportEntity } from "@/entities/sport.entity";

export const useSportStore = defineStore("sport", () => {
    const { data } = useFindAllOfSports();

    function findById(id: string): SportEntity | null {
        try {
            const values: SportEntity[] = data.value!.data;

            const entity = values.find(
                (entity: SportEntity) => entity.id === id,
            );

            return entity || null;
        } catch {
            return null;
        }
    }

    return { data, findById };
});
