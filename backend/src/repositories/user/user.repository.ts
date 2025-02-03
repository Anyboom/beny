import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { UserType } from '@/repositories/user/user.type';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async getList(): Promise<UserType[]> {
    return this.prismaService.user.findMany();
  }
}
