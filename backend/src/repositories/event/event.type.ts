import { StatusEvent } from '@prisma/client';

export type EventType = {
  id: string;
  status: StatusEvent;
  coefficient: number;
  competitionId: string;
  guestTeamId: string;
  homeTeamId: string;
  sportId: string;
  forecastId: string;
  betId: string;
};
