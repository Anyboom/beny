import { Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Sport } from '@prisma/client';

@Injectable()
export class SportService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createSportDto: CreateSportDto): Promise<Sport> {
    return this.prismaService.sport.create({
      data: createSportDto,
    });
  }

  findAll(): Promise<Sport[]> {
    return this.prismaService.sport.findMany();
  }

  findOne(id: string): Promise<Sport> {
    return this.prismaService.sport.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateSportDto: UpdateSportDto): Promise<Sport> {
    return this.prismaService.sport.update({
      where: {
        id: id,
      },
      data: updateSportDto,
    });
  }

  remove(id: string): Promise<Sport> {
    return this.prismaService.sport.delete({
      where: {
        id: id,
      },
    });
  }
}
