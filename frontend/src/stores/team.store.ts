import { defineStore } from "pinia";
import { useFindAllOfTeams } from "@/api/team/use-team.api";
import { computed } from "vue";
import type { TeamEntity } from "@/entities/team.entity";

export const useTeamStore = defineStore("team", () => {
  const query = useFindAllOfTeams();

  const values = computed<TeamEntity[]>(() => query.data.value?.data ?? []);

  return { values };
});
