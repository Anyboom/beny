import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetController } from './bet.controller';
import { BetRepository } from '@/repositories/bet/bet.repository';

@Module({
  controllers: [BetController],
  providers: [BetService, BetRepository],
})
export class BetModule {}
