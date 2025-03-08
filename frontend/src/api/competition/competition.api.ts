import httpClient from "@/api/http-client";

export function findAllOfCompetitionsApi() {
  return httpClient.get("http://api.beny.localhost/competition");
}
