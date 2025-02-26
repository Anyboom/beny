import httpClient from "@/api/http-client";

export function findAllOfForecasts() {
    return httpClient.get("http://api.beny.localhost/forecast");
}
