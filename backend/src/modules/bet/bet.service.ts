import { Injectable } from '@nestjs/common';
import { BetRepository } from '@/repositories/bet/bet.repository';
import { BetType } from '@/repositories/bet/bet.type';

@Injectable()
export class BetService {
  constructor(private betRepository: BetRepository) {}

  findAll(): Promise<BetType[]> {
    return this.betRepository.findAll();
  }
}
