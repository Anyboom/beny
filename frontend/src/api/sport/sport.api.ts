import httpClient from "@/api/http-client";

export function findAllOfSports() {
    return httpClient.get("http://api.beny.localhost/sport");
}
