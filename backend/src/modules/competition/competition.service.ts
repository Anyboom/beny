import { Injectable } from '@nestjs/common';
import { CompetitionType } from '@/repositories/competition/competition.type';
import { CompetitionRepository } from '@/repositories/competition/competition.repository';

@Injectable()
export class CompetitionService {
  constructor(private competitionRepository: CompetitionRepository) {}

  findAll(): Promise<CompetitionType[]> {
    return this.competitionRepository.findAll();
  }
}
