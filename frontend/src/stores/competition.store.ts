import { defineStore } from "pinia";
import type { CompetitionEntity } from "@/entities/competition.entity";
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { useCompetitionKeys } from "@/api/competition/use-competition.keys";
import { findAllOfCompetitionsApi } from "@/api/competition/competition.api";

export const useCompetitionStore = defineStore("competition", () => {
  const { data } = useQuery({
    queryKey: [useCompetitionKeys.FIND_ALL],
    queryFn: () => findAllOfCompetitionsApi(),
    retry: 2,
    retryDelay: 60000,
    staleTime: 5 * 60000,
  });

  const values = computed<CompetitionEntity[]>(() => data.value?.data ?? []);

  return { values };
});
