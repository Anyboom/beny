import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from '@/modules/auth/dto/sign-in.dto';
import { TokenDto } from '@/modules/auth/dto/token.dto';
import { plainToInstance } from 'class-transformer';
import { UserService } from '@/modules/user/user.service';
import { UserEntity } from '@/modules/user/entities/user.entity';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * Функция для валидации пользователя.
   * @param {string} email - почта пользователя.
   * @returns {Promise<UserEntity | null>} - возвращает `UserEntity`, если `true`, иначе - `null`.
   */
  validate(email: string): Promise<UserEntity | null> {
    try {
      return this.userService.findOneByEmail(email);
    } catch {
      return Promise.resolve(null);
    }
  }

  /**
   * Функция для авторизации пользователя.
   * @param {signInDto} signInDto - данные пользователя.
   * @returns {Promise<TokenDto>} - токен авторизации.
   */
  async signIn(signInDto: SignInDto): Promise<TokenDto> {
    const user: UserEntity | null = await this.validate(signInDto.email);

    if (user === null) {
      throw new HttpException(
        'The user already exists',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isComparePassword = await bcrypt.compare(
      signInDto.password,
      user.password,
    );

    if (isComparePassword === false) {
      throw new HttpException(
        'Check your password or email',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = {
      email: user.email,
    };

    const token = {
      access_token: this.jwtService.sign(payload),
    };

    return plainToInstance(TokenDto, token);
  }

  /**
   * Функция для регистрации пользователя.
   * @param {CreateUserDto} createUserDto - данные пользователя.
   * @returns {Promise<UserEntity>} - созданная модель пользователя.
   */
  async signUp(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user: UserEntity | null = await this.userService.findOneByEmail(
      createUserDto.email,
    );

    if (user !== null) {
      throw new HttpException('The user already exists', HttpStatus.CONFLICT);
    }

    const newUser: UserEntity = await this.userService.create({
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password, 10),
    });

    return plainToInstance(UserEntity, newUser);
  }
}
