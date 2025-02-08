import { Controller, Get } from '@nestjs/common';
import { BetService } from './bet.service';
import { Bet } from '@prisma/client';

@Controller('bet')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @Get()
  findAll(): Promise<Bet[]> {
    return this.betService.findAll();
  }
}
