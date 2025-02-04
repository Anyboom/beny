import { Controller, Get } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionType } from '@/repositories/competition/competition.type';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}

  @Get()
  findAll(): Promise<CompetitionType[]> {
    return this.competitionService.findAll();
  }
}
