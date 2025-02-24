import { Sport } from '@prisma/client';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class SportEntity implements Sport {
  /**
   * Идентификатор.
   */
  @ApiProperty()
  @Expose()
  id: string;

  /**
   * Название.
   */
  @ApiProperty()
  @Expose()
  name: string;
}
