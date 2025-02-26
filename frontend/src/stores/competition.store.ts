import { defineStore } from "pinia";
import { useFindAllOfCompetitions } from "@/api/competition/use-competition.api";
import type { CompetitionEntity } from "@/entities/competition.entity";

export const useCompetitionStore = defineStore("competition", () => {
    const { data } = useFindAllOfCompetitions();

    function findById(id: string): CompetitionEntity | null {
        try {
            const values: CompetitionEntity[] = data.value!.data;

            const entity = values.find(
                (entity: CompetitionEntity) => entity.id === id,
            );

            return entity || null;
        } catch {
            return null;
        }
    }

    return { data, findById };
});
