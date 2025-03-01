import httpClient from "@/api/http-client";

export function findAllOfCompetitions() {
  return httpClient.get("http://api.beny.localhost/competition");
}
