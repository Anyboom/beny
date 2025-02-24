import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBetDto {
  /**
   * Идентификатор.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  id: string;

  /**
   * Идентификатор сущности `user`.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  userId: string;
}
