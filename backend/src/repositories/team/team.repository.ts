import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Team } from '@prisma/client';

@Injectable()
export class TeamRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<Team[]> {
    return this.prismaService.team.findMany();
  }
}
