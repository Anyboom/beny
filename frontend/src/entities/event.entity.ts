import type { StatusEventEnum } from "@/enums/status-event.enum";

export type EventEntity = {
    id: string;
    status: StatusEventEnum;
    coefficient: number;
    competitionId: string;
    guestTeamId: string;
    homeTeamId: string;
    sportId: string;
    forecastId: string;
    betId: string;
};
