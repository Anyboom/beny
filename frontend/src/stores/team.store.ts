import { TeamEntity } from "@/entities/team.entity.ts";
import { getTeams } from "@/api/team.api.ts";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", () => {
    const teams = ref<TeamEntity[]>([]);

    async function init(): Promise<void> {
        const data: TeamEntity[] = await getTeams();
        teams.value.push(...data);
    }

    async function getData(): Promise<TeamEntity[]> {
        if (teams.value.length == 0) {
            await init();
        }

        return teams.value;
    }

    return { getData };
});
