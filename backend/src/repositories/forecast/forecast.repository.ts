import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Forecast } from '@prisma/client';

@Injectable()
export class ForecastRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<Forecast[]> {
    return this.prismaService.forecast.findMany();
  }
}
