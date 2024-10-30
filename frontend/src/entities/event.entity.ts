import { CompetitionEntity } from "@/entities/competition.entity.ts";
import { TeamEntity } from "@/entities/team.entity.ts";
import { SportEntity } from "@/entities/sport.entity.ts";
import { ForecastEntity } from "@/entities/forecast.entity.ts";
import { EventStatus } from "@/enums/event-status.enum.ts";
import { BetEntity } from "@/entities/bet.entity.ts";

export type EventEntity = {
    id: number;
    competition: CompetitionEntity;
    guestTeam: TeamEntity;
    homeTeam: TeamEntity;
    sport: SportEntity;
    Forecast: ForecastEntity;
    coefficient: number;
    status: EventStatus;
    bet: BetEntity;
    isPreMatch: boolean;
    created_at: string;
    updated_at: string;
};
