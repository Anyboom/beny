import axios, { HttpStatusCode } from "axios";
import { ForecastEntity } from "@/entities/forecast.entity.ts";

export async function getForecasts(): Promise<ForecastEntity[]> {
    const response = await axios.get<ForecastEntity[]>("/api/forecasts");

    switch (response.status) {
        case HttpStatusCode.Ok:
        case HttpStatusCode.NotModified:
            return response.data;
        default:
            return [];
    }
}
