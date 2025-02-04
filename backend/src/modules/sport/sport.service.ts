import { Injectable } from '@nestjs/common';
import { SportRepository } from '@/repositories/sport/sport.repository';
import { SportType } from '@/repositories/sport/sport.type';

@Injectable()
export class SportService {
  constructor(private sportRepository: SportRepository) {}

  findAll(): Promise<SportType[]> {
    return this.sportRepository.findAll();
  }
}
