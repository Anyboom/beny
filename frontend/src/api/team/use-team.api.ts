import { useQuery } from "@tanstack/vue-query";
import { findAllOfTeams } from "@/api/team/team.api";
import { useTeamKeys } from "@/api/team/use-team.keys";

export function useFindAllOfTeams() {
    return useQuery({
        queryKey: [useTeamKeys.FIND_ALL],
        queryFn: findAllOfTeams,
    });
}
