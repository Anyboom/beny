import { Injectable } from '@nestjs/common';
import { CompetitionRepository } from '@/repositories/competition/competition.repository';
import { Competition } from '@prisma/client';

@Injectable()
export class CompetitionService {
  constructor(private competitionRepository: CompetitionRepository) {}

  findAll(): Promise<Competition[]> {
    return this.competitionRepository.findAll();
  }
}
