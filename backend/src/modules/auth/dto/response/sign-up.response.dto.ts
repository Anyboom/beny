import { Exclude } from 'class-transformer';
import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpResponseDto implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;
}
