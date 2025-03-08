import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Team } from '@prisma/client';

@Injectable()
export class TeamService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTeamDto: CreateTeamDto): Promise<Team> {
    return this.prismaService.team.create({
      data: createTeamDto,
    });
  }

  findAll(): Promise<Team[]> {
    return this.prismaService.team.findMany();
  }

  findOne(id: string): Promise<Team> {
    return this.prismaService.team.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    return this.prismaService.team.update({
      where: {
        id: id,
      },
      data: updateTeamDto,
    });
  }

  remove(id: string): Promise<Team> {
    return this.prismaService.team.delete({
      where: {
        id: id,
      },
    });
  }
}
