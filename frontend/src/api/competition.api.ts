import axios, { HttpStatusCode } from "axios";
import { CompetitionEntity } from "@/entities/competition.entity.ts";

export async function getCompetitions(): Promise<CompetitionEntity[]> {
    const response = await axios.get<CompetitionEntity[]>("/api/competitions");

    switch (response.status) {
        case HttpStatusCode.Ok:
        case HttpStatusCode.NotModified:
            return response.data;
        default:
            return [];
    }
}
