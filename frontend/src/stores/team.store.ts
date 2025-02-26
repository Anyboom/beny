import { defineStore } from "pinia";
import { useFindAllOfTeams } from "@/api/team/use-team.api";
import type { TeamEntity } from "@/entities/team.entity";

export const useTeamStore = defineStore("team", () => {
    const { data } = useFindAllOfTeams();

    function findById(id: string): TeamEntity | null {
        try {
            const values: TeamEntity[] = data.value!.data;

            const entity = values.find(
                (entity: TeamEntity) => entity.id === id,
            );

            return entity || null;
        } catch {
            return null;
        }
    }

    return { data, findById };
});
