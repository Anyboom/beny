import { useQuery } from "@tanstack/vue-query";
import { findAllOfCompetitions } from "@/api/competition/competition.api";
import { useCompetitionKeys } from "@/api/competition/use-competition.keys";

export function useFindAllOfCompetitions() {
  return useQuery({
    queryKey: [useCompetitionKeys.FIND_ALL],
    queryFn: findAllOfCompetitions,
    retry: false,
    staleTime: 5000,
  });
}
