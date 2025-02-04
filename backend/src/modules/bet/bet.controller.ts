import { Controller, Get } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetType } from '@/repositories/bet/bet.type';

@Controller('bet')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @Get()
  findAll(): Promise<BetType[]> {
    return this.betService.findAll();
  }
}
