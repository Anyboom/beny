import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateForecastDto {
  /**
   * Название.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;
}
