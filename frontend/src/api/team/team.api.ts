import httpClient from "@/api/http-client";

export function findAllOfTeams() {
    return httpClient.get("http://api.beny.localhost/team");
}
