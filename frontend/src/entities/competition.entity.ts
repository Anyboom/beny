import { CountryEntity } from "@/entities/country.entity.ts";

export type CompetitionEntity = {
    id: number;
    name: string;
    country: CountryEntity;
    created_at: string;
    updated_at: string;
};
