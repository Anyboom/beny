import { User } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  /**
   * Идентификатор.
   */
  @ApiProperty()
  @Expose()
  id: string;

  /**
   * Электронная почта.
   */
  @ApiProperty()
  @Expose()
  email: string;

  /**
   * Пароль.
   */
  @ApiHideProperty()
  @Exclude()
  password: string;
}
