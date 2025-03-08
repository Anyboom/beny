import { defineStore } from "pinia";
import { computed } from "vue";
import type { TeamEntity } from "@/entities/team.entity";
import { useQuery } from "@tanstack/vue-query";
import { useTeamKeys } from "@/api/team/use-team.keys";
import { findAllOfTeamsApi } from "@/api/team/team.api";

export const useTeamStore = defineStore("team", () => {
  const query = useQuery({
    queryKey: [useTeamKeys.FIND_ALL],
    queryFn: () => findAllOfTeamsApi(),
    retry: 2,
    retryDelay: 60000,
    staleTime: 5 * 60000,
  });

  const values = computed<TeamEntity[]>(() => query.data.value?.data ?? []);

  return { values };
});
