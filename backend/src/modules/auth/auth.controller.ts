import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { SignInRequestDto } from '@/modules/auth/dto/sign-in.request.dto';
import { SignUpRequestDto } from '@/modules/auth/dto/sign-up.request.dto';
import { SignInResponseDto } from '@/modules/auth/dto/sign-in.response.dto';
import { SignUpResponseDto } from '@/modules/auth/dto/sign-up.response.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  public async signIn(
    @Body() signInDto: SignInRequestDto,
  ): Promise<SignInResponseDto> {
    return this.authService.signIn(signInDto);
  }

  @Post('sign-up')
  public async signUp(
    @Body() signUpDto: SignUpRequestDto,
  ): Promise<SignUpResponseDto> {
    return this.authService.signUp(signUpDto);
  }
}
