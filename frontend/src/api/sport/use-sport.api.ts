import { useQuery } from "@tanstack/vue-query";
import { findAllOfSports } from "@/api/sport/sport.api";
import { useSportKeys } from "@/api/sport/use-sport.keys";

export function useFindAllOfSports() {
  return useQuery({
    queryKey: [useSportKeys.FIND_ALL],
    queryFn: findAllOfSports,
    retry: false,
    staleTime: 5000,
  });
}
