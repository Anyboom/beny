import { Bet } from '@prisma/client';
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
}
