import httpClient from "@/api/http-client";

export function findAllOfTeamsApi() {
  return httpClient.get("http://api.beny.localhost/team");
}
