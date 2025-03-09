import { Bet, StatusEvent } from '@prisma/client';
import { Exclude, Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '@/modules/user/entities/user.entity';
import { EventEntity } from '@/modules/event/entities/event.entity';

export class BetEntity implements Bet {
  /**
   * Идентификатор.
   */
  @ApiProperty()
  @Expose()
  id: string;

  /**
   * Идентификатор сущности `User`.
   */
  @Exclude()
  userId: string;

  /**
   * Сущность `User`.
   */
  @ApiProperty()
  @Type(() => UserEntity)
  @Expose()
  user: UserEntity;

  /**
   * Массив сущностей `event`.
   */
  @ApiProperty()
  @Type(() => EventEntity)
  @Expose()
  events: EventEntity[];

  /**
   * Общий коэффициент.
   */
  @ApiProperty()
  @Expose()
  get coefficient(): number {
    return this.events.reduce((sum, event) => sum * event.coefficient, 1);
  }

  /**
   * Общий статус.
   */
  @ApiProperty()
  @Expose()
  get status(): StatusEvent {
    if (this.events.some((x) => x.status == StatusEvent.LOSE)) {
      return StatusEvent.LOSE;
    }

    if (this.events.some((x) => x.status == StatusEvent.RETURN)) {
      return StatusEvent.RETURN;
    }

    if (
      this.events.some(
        (x) =>
          x.status !== StatusEvent.LOSE &&
          x.status !== StatusEvent.NOT_CALCULATED,
      )
    ) {
      return StatusEvent.WIN;
    }

    return StatusEvent.NOT_CALCULATED;
  }
}
