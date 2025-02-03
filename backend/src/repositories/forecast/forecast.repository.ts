import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { ForecastType } from '@/repositories/forecast/forecast.type';

@Injectable()
export class ForecastRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async getList(): Promise<ForecastType[]> {
    return this.prismaService.forecast.findMany();
  }
}
