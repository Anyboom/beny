import { Controller, Get } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { Competition } from '@prisma/client';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}

  @Get()
  findAll(): Promise<Competition[]> {
    return this.competitionService.findAll();
  }
}
