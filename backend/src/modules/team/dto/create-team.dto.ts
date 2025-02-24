import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  /**
   * Название.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * Идентификатор сущности `country`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  countryId: string;
}
