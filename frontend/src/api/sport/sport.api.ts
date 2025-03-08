import httpClient from "@/api/http-client";

export function findAllOfSportsApi() {
  return httpClient.get("http://api.beny.localhost/sport");
}
