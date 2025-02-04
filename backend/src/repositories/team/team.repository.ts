import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { TeamType } from '@/repositories/team/team.type';

@Injectable()
export class TeamRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<TeamType[]> {
    return this.prismaService.team.findMany();
  }
}
