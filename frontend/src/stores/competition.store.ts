import { defineStore } from "pinia";
import { useFindAllOfCompetitions } from "@/api/competition/use-competition.api";
import type { CompetitionEntity } from "@/entities/competition.entity";
import { computed } from "vue";

export const useCompetitionStore = defineStore("competition", () => {
    const { data } = useFindAllOfCompetitions();

    const values = computed<CompetitionEntity[]>(() => data.value?.data ?? []);

    return { values };
});
