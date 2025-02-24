import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  /**
   * Токен.
   */
  @ApiProperty()
  access_token: string;
}
