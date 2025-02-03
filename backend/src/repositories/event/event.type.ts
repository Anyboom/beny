import { StatusEventEnum } from '@/enums/status-event.enum';

export type EventType = {
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
