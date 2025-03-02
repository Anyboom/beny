import type { CreateBetDto } from "@/api/bet/dto/create-bet.dto";
import { useMutation } from "@tanstack/vue-query";
import { useBetKeys } from "@/api/bet/use-bet.keys";
import { createBet } from "@/api/bet/bet.api";

export function useCreateBet() {
  return useMutation({
    mutationKey: [useBetKeys.CREATE],
    mutationFn: (createBetDto: CreateBetDto) => createBet(createBetDto),
  });
}
