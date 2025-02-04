import { Injectable } from '@nestjs/common';
import { ForecastRepository } from '@/repositories/forecast/forecast.repository';
import { ForecastType } from '@/repositories/forecast/forecast.type';

@Injectable()
export class ForecastService {
  constructor(private forecastRepository: ForecastRepository) {}

  findAll(): Promise<ForecastType[]> {
    return this.forecastRepository.findAll();
  }
}
