import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Bet } from '@prisma/client';

@Injectable()
export class BetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<Bet[]> {
    return this.prismaService.bet.findMany();
  }
}
