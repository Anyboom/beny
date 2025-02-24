import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  /**
   * Электронная почта.
   */
  @ApiProperty({})
  @Expose()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * Пароль.
   */
  @ApiProperty()
  @Expose()
  @IsString()
  @IsNotEmpty()
  password: string;
}
