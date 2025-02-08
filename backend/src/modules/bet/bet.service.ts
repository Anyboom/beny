import { Injectable } from '@nestjs/common';
import { BetRepository } from '@/repositories/bet/bet.repository';
import { Bet } from '@prisma/client';

@Injectable()
export class BetService {
  constructor(private betRepository: BetRepository) {}

  findAll(): Promise<Bet[]> {
    return this.betRepository.findAll();
  }
}
