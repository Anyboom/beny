import { defineStore } from "pinia";
import { computed } from "vue";
import { useProfileApi } from "@/api/auth/use-auth.api";
import { useAuthStore } from "@/stores/auth.store";
import { useQueryClient } from "@tanstack/vue-query";
import { useTeamKeys } from "@/api/team/use-team.keys";
import { useForecastKeys } from "@/api/forecast/use-forecast.keys";
import { useSportKeys } from "@/api/sport/use-sport.keys";
import { useCompetitionKeys } from "@/api/competition/use-competition.keys";
import { useAuthKeys } from "@/api/auth/use-auth.keys";

export const useUserStore = defineStore("user", () => {
  const { data } = useProfileApi();

  const authStore = useAuthStore();
  const queryClient = useQueryClient();

  const profile = computed(() => data.value?.data);

  async function signIn(accessToken: string) {
    authStore.setToken(accessToken);

    await Promise.all([
      queryClient.invalidateQueries({ queryKey: [useAuthKeys.PROFILE] }),
      queryClient.invalidateQueries({ queryKey: [useTeamKeys.FIND_ALL] }),
      queryClient.invalidateQueries({
        queryKey: [useForecastKeys.FIND_ALL],
      }),
      queryClient.invalidateQueries({
        queryKey: [useSportKeys.FIND_ALL],
      }),
      queryClient.invalidateQueries({
        queryKey: [useCompetitionKeys.FIND_ALL],
      }),
    ]);
  }

  async function logout() {
    authStore.removeToken();

    await queryClient.cancelQueries({ queryKey: [useAuthKeys.PROFILE] });
    await queryClient.cancelQueries({ queryKey: [useTeamKeys.FIND_ALL] });
    await queryClient.cancelQueries({
      queryKey: [useForecastKeys.FIND_ALL],
    });
    await queryClient.cancelQueries({
      queryKey: [useSportKeys.FIND_ALL],
    });
    await queryClient.cancelQueries({
      queryKey: [useCompetitionKeys.FIND_ALL],
    });
  }

  return {
    profile,
    logout,
    signIn,
  };
});
