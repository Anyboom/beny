import { defineStore } from "pinia";
import { useQuery } from "@tanstack/vue-query";
import { findAllOfBetsByPaginate } from "@/api/bet/bet.api";
import { useBetKeys } from "@/api/bet/use-bet.keys";
import { computed, ref } from "vue";
import type { BetEntity } from "@/entities/bet.entity";
import type { PaginateOutput } from "@/types/paginate-output.type";

export const useBetStore = defineStore("bet", () => {
  const page = ref(1);

  const { data, refetch } = useQuery({
    queryFn: () => findAllOfBetsByPaginate(page.value),
    queryKey: [useBetKeys.PAGINATE, page.value],
  });

  function changePage(value: number) {
    page.value = value;

    refetch();
  }

  const paginatedValues = computed<PaginateOutput<BetEntity>>(() => data.value?.data ?? []);

  return { paginatedValues, changePage };
});
