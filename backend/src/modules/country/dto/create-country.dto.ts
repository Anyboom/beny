import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  name: string;
}
