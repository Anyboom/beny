import axios, { HttpStatusCode } from "axios";
import { TeamEntity } from "@/entities/team.entity.ts";

export async function getTeams(): Promise<TeamEntity[]> {
    const response = await axios.get<TeamEntity[]>("/api/teams");

    switch (response.status) {
        case HttpStatusCode.Ok:
        case HttpStatusCode.NotModified:
            return response.data;
        default:
            return [];
    }
}
