import { StatusEvent } from '@prisma/client';
import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  /**
   * Идентификатор.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  id: string;

  /**
   * Статус.
   */
  @ApiProperty()
  @Expose()
  @IsEnum(StatusEvent)
  @IsNotEmpty()
  status: StatusEvent;

  /**
   * Коэффициент.
   */
  @ApiProperty()
  @Expose()
  @IsNumber()
  @IsNotEmpty()
  coefficient: number;

  /**
   * Идентификатор сущности `competition`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  competitionId: string;

  /**
   * Идентификатор сущности `team`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  guestTeamId: string;

  /**
   * Идентификатор сущности `team`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  homeTeamId: string;

  /**
   * Идентификатор сущности `sport`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  sportId: string;

  /**
   * Идентификатор сущности `forecast`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  forecastId: string;

  /**
   * Идентификатор сущности `bet`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  betId: string;
}
