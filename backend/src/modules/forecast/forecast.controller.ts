import { Controller, Get } from '@nestjs/common';
import { ForecastService } from './forecast.service';
import { Forecast } from '@prisma/client';

@Controller('forecast')
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @Get()
  findAll(): Promise<Forecast[]> {
    return this.forecastService.findAll();
  }
}
