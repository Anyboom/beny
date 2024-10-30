import { defineStore } from "pinia";
import { ref } from "vue";
import { CompetitionEntity } from "@/entities/competition.entity.ts";
import { getCompetitions } from "@/api/competition.api.ts";

export const useCompetitionStore = defineStore("competition", () => {
    const competitions = ref<CompetitionEntity[]>([]);

    async function init(): Promise<void> {
        const data: CompetitionEntity[] = await getCompetitions();
        competitions.value.push(...data);
    }

    async function getData(): Promise<CompetitionEntity[]> {
        if (competitions.value.length == 0) {
            await init();
        }

        return competitions.value;
    }

    return { getData };
});
