import { Bet } from '@prisma/client';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BetEntity implements Bet {
  /**
   * Идентификатор.
   */
  @ApiProperty()
  @Expose()
  id: string;

  /**
   * Идентификатор сущности `country`.
   */
  @ApiProperty()
  @Expose()
  userId: string;
}
