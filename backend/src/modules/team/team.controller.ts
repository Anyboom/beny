import { Controller, Get } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamType } from '@/repositories/team/team.type';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  public findAll(): Promise<TeamType[]> {
    return this.teamService.findAll();
  }
}
