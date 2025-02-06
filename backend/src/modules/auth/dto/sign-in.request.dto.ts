import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInRequestDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
