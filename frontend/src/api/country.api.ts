import axios, { HttpStatusCode } from "axios";
import { CountryEntity } from "@/entities/country.entity.ts";

export async function getCountries(): Promise<CountryEntity[]> {
    const response = await axios.get<CountryEntity[]>("/api/countries");

    switch (response.status) {
        case HttpStatusCode.Ok:
        case HttpStatusCode.NotModified:
            return response.data;
        default:
            return [];
    }
}
