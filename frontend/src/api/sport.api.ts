import axios, { HttpStatusCode } from "axios";
import { SportEntity } from "@/entities/sport.entity.ts";

export async function getSports(): Promise<SportEntity[]> {
    const response = await axios.get<SportEntity[]>("/api/sports");

    switch (response.status) {
        case HttpStatusCode.Ok:
        case HttpStatusCode.NotModified:
            return response.data;
        default:
            return [];
    }
}
