import { Controller, Get } from '@nestjs/common';
import { SportService } from './sport.service';
import { Sport } from '@prisma/client';

@Controller('sport')
export class SportController {
  constructor(private readonly sportService: SportService) {}

  @Get()
  findAll(): Promise<Sport[]> {
    return this.sportService.findAll();
  }
}
