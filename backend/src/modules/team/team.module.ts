import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TeamRepository } from '@/repositories/team/team.repository';

@Module({
  controllers: [TeamController],
  providers: [TeamService, TeamRepository],
})
export class TeamModule {}
