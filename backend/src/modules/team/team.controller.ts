import { Controller, Get } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from '@prisma/client';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  public findAll(): Promise<Team[]> {
    return this.teamService.findAll();
  }
}
