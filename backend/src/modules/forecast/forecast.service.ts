import { Injectable } from '@nestjs/common';
import { ForecastRepository } from '@/repositories/forecast/forecast.repository';
import { Forecast } from '@prisma/client';

@Injectable()
export class ForecastService {
  constructor(private forecastRepository: ForecastRepository) {}

  findAll(): Promise<Forecast[]> {
    return this.forecastRepository.findAll();
  }
}
