import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { SignInRequestDto } from '@/modules/auth/dto/request/sign-in.request.dto';
import { SignUpRequestDto } from '@/modules/auth/dto/request/sign-up.request.dto';
import { SignInResponseDto } from '@/modules/auth/dto/response/sign-in.response.dto';
import { SignUpResponseDto } from '@/modules/auth/dto/response/sign-up.response.dto';
import { Authorized } from '@/modules/auth/decorators/authorized.decorator';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { ProfileResponseDto } from '@/modules/auth/dto/response/profile.response.dto';
import { plainToInstance } from 'class-transformer';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse({
    type: SignInResponseDto,
  })
  @Post('sign-in')
  public async signIn(
    @Body() signInRequestDto: SignInRequestDto,
  ): Promise<SignInResponseDto> {
    return this.authService.signIn(signInRequestDto);
  }

  @ApiResponse({
    type: SignUpResponseDto,
  })
  @Post('sign-up')
  public async signUp(
    @Body() signUpRequestDto: SignUpRequestDto,
  ): Promise<SignUpResponseDto> {
    return this.authService.signUp(signUpRequestDto);
  }

  @ApiResponse({
    type: ProfileResponseDto,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public profile(@Authorized() user: User): ProfileResponseDto {
    return plainToInstance(ProfileResponseDto, user);
  }
}
