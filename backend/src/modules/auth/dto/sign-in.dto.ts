import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  /**
   * Электронная почта.
   */
  @IsEmail()
  @ApiProperty()
  email: string;

  /**
   * Пароль.
   */
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;
}
