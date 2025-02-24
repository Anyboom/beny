import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSportDto {
  /**
   * Название.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;
}
