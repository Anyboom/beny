import { CountryEntity } from "@/entities/country.entity.ts";

export type TeamEntity = {
    id: string;
    name: string;
    country: CountryEntity;
    created_at: string;
    updated_at: string;
};
