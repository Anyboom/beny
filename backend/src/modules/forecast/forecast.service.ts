import { Injectable } from '@nestjs/common';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Forecast } from '@prisma/client';

@Injectable()
export class ForecastService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createForecastDto: CreateForecastDto): Promise<Forecast> {
    return this.prismaService.forecast.create({
      data: createForecastDto,
    });
  }

  findAll(): Promise<Forecast[]> {
    return this.prismaService.forecast.findMany();
  }

  findOne(id: string): Promise<Forecast> {
    return this.prismaService.forecast.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateForecastDto: UpdateForecastDto): Promise<Forecast> {
    return this.prismaService.forecast.update({
      where: {
        id: id,
      },
      data: updateForecastDto,
    });
  }

  remove(id: string): Promise<Forecast> {
    return this.prismaService.forecast.delete({
      where: {
        id: id,
      },
    });
  }
}
