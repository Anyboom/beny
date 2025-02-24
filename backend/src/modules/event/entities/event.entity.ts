import { Event, StatusEvent } from '@prisma/client';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class EventEntity implements Event {
  /**
   * Идентификатор.
   */
  @ApiProperty()
  @Expose()
  id: string;

  /**
   * Статус.
   */
  @ApiProperty()
  @Expose()
  status: StatusEvent;

  /**
   * Коэффициент.
   */
  @ApiProperty()
  @Expose()
  coefficient: number;

  /**
   * Идентификатор сущности `competition`.
   */
  @ApiProperty()
  @Expose()
  competitionId: string;

  /**
   * Идентификатор сущности `team`.
   */
  @ApiProperty()
  @Expose()
  guestTeamId: string;

  /**
   * Идентификатор сущности `team`.
   */
  @ApiProperty()
  @Expose()
  homeTeamId: string;

  /**
   * Идентификатор сущности `sport`.
   */
  @ApiProperty()
  @Expose()
  sportId: string;

  /**
   * Идентификатор сущности `forecast`.
   */
  @ApiProperty()
  @Expose()
  forecastId: string;

  /**
   * Идентификатор сущности `bet`.
   */
  @ApiProperty()
  @Expose()
  betId: string;
}
