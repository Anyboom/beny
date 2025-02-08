import { Injectable } from '@nestjs/common';
import { SportRepository } from '@/repositories/sport/sport.repository';
import { Sport } from '@prisma/client';

@Injectable()
export class SportService {
  constructor(private sportRepository: SportRepository) {}

  findAll(): Promise<Sport[]> {
    return this.sportRepository.findAll();
  }
}
