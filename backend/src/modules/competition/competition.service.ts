import { Injectable } from '@nestjs/common';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Competition } from '@prisma/client';

@Injectable()
export class CompetitionService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCompetitionDto: CreateCompetitionDto): Promise<Competition> {
    return this.prismaService.competition.create({
      data: createCompetitionDto,
    });
  }

  findAll(): Promise<Competition[]> {
    return this.prismaService.competition.findMany();
  }

  findOne(id: string): Promise<Competition> {
    return this.prismaService.competition.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(
    id: string,
    updateCompetitionDto: UpdateCompetitionDto,
  ): Promise<Competition> {
    return this.prismaService.competition.update({
      where: {
        id: id,
      },
      data: updateCompetitionDto,
    });
  }

  remove(id: string): Promise<Competition> {
    return this.prismaService.competition.delete({
      where: {
        id: id,
      },
    });
  }
}
