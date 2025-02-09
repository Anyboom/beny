import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '@/repositories/user/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInRequestDto } from '@/modules/auth/dto/sign-in.request.dto';
import { SignUpRequestDto } from '@/modules/auth/dto/sign-up.request.dto';
import { SignInResponseDto } from '@/modules/auth/dto/sign-in.response.dto';
import { SignUpResponseDto } from '@/modules/auth/dto/sign-up.response.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  public async validate(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  public async signIn(
    signInRequestDto: SignInRequestDto,
  ): Promise<SignInResponseDto> {
    const user = await this.validate(signInRequestDto.email);

    if (user === null) {
      throw new HttpException(
        'The user already exists',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isComparePassword = await bcrypt.compare(
      signInRequestDto.password,
      user.password,
    );

    if (isComparePassword === false) {
      throw new HttpException(
        'Check your password or email',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  public async signUp(
    signUpRequestDto: SignUpRequestDto,
  ): Promise<SignUpResponseDto> {
    const user = await this.userRepository.findByEmail(signUpRequestDto.email);

    if (user !== null) {
      throw new HttpException('The user already exists', HttpStatus.CONFLICT);
    }

    const newUser = await this.userRepository.create({
      email: signUpRequestDto.email,
      password: await bcrypt.hash(signUpRequestDto.password, 10),
    });

    return {
      email: newUser.email,
      id: newUser.id,
    };
  }
}
