import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { TeamEntity } from '@/modules/team/entities/team.entity';

@Injectable()
export class TeamService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTeamDto: CreateTeamDto): Promise<TeamEntity> {
    return this.prismaService.team.create({
      data: createTeamDto,
    });
  }

  findAll(): Promise<TeamEntity[]> {
    return this.prismaService.team.findMany();
  }

  findOne(id: string): Promise<TeamEntity> {
    return this.prismaService.team.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateTeamDto: UpdateTeamDto): Promise<TeamEntity> {
    return this.prismaService.team.update({
      where: {
        id: id,
      },
      data: updateTeamDto,
    });
  }

  remove(id: string): Promise<TeamEntity> {
    return this.prismaService.team.delete({
      where: {
        id: id,
      },
    });
  }
}
