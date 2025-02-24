import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { SignInDto } from '@/modules/auth/dto/sign-in.dto';
import { TokenDto } from '@/modules/auth/dto/token.dto';
import { Authorized } from '@/modules/auth/decorators/authorized.decorator';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';
import { UserEntity } from '@/modules/user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Функция для авторизации пользователя.
   * @param {SignInDto} signInDto - данные для авторизации.
   * @returns {Promise<TokenDto>} - токен авторизации.
   */
  @ApiResponse({
    type: TokenDto,
  })
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto): Promise<TokenDto> {
    return this.authService.signIn(signInDto);
  }

  /**
   * Функция для регистрации пользователя.
   * @param {CreateUserDto} createUserDto - данные для регистрации.
   * @returns {Promise<UserEntity>} - данные пользователя.
   */
  @ApiResponse({
    type: UserEntity,
  })
  @Post('sign-up')
  signUp(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.authService.signUp(createUserDto);
  }

  /**
   * Функция для получения профиля пользователя.
   * @returns {UserEntity} - данные пользователя.
   */
  @ApiResponse({
    type: UserEntity,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Authorized() user: User): UserEntity {
    return plainToInstance(UserEntity, user);
  }
}
