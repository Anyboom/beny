import { Forecast } from '@prisma/client';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ForecastEntity implements Forecast {
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
