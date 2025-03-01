import { useQuery } from "@tanstack/vue-query";
import { findAllOfForecasts } from "@/api/forecast/forecast.api";
import { useForecastKeys } from "@/api/forecast/use-forecast.keys";

export function useFindAllOfForecasts() {
  return useQuery({
    queryKey: [useForecastKeys.FIND_ALL],
    queryFn: findAllOfForecasts,
    retry: false,
    staleTime: 5000,
  });
}
