import { Team } from '@prisma/client';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class TeamEntity implements Team {
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

  /**
   * Идентификатор сущности `country`.
   */
  @ApiProperty()
  @Expose()
  countryId: string;
}
