import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Competition } from '@prisma/client';

@Injectable()
export class CompetitionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<Competition[]> {
    return this.prismaService.competition.findMany();
  }
}
