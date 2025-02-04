import { Controller, Get } from '@nestjs/common';
import { ForecastService } from './forecast.service';
import { ForecastType } from '@/repositories/forecast/forecast.type';

@Controller('forecast')
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @Get()
  findAll(): Promise<ForecastType[]> {
    return this.forecastService.findAll();
  }
}
