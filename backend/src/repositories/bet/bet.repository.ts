import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { BetType } from '@/repositories/bet/bet.type';

@Injectable()
export class BetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async getList(): Promise<BetType[]> {
    return this.prismaService.bet.findMany();
  }
}
