import { Controller, Get } from '@nestjs/common';
import { SportService } from './sport.service';
import { SportType } from '@/repositories/sport/sport.type';

@Controller('sport')
export class SportController {
  constructor(private readonly sportService: SportService) {}

  @Get()
  findAll(): Promise<SportType[]> {
    return this.sportService.findAll();
  }
}
