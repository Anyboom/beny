import httpClient from "@/api/http-client";

export function findAllOfForecastsApi() {
  return httpClient.get("http://api.beny.localhost/forecast");
}
