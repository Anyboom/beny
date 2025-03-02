import { Expose, Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateBetEventDto } from '@/modules/bet/dto/create-bet-event.dto';

export class CreateBetDto {
  /**
   * Идентификатор сущности `user`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  userId: string;

  /**
   * Массив сущностей `event`.
   */
  @ApiProperty({ type: CreateBetEventDto, isArray: true })
  @Expose()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateBetEventDto)
  events: CreateBetEventDto[];
}
