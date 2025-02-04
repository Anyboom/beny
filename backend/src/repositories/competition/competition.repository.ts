import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { CompetitionType } from '@/repositories/competition/competition.type';

@Injectable()
export class CompetitionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<CompetitionType[]> {
    return this.prismaService.competition.findMany();
  }
}
