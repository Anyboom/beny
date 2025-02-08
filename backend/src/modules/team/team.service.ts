import { Injectable } from '@nestjs/common';
import { TeamRepository } from '@/repositories/team/team.repository';
import { Team } from '@prisma/client';

@Injectable()
export class TeamService {
  constructor(private teamRepository: TeamRepository) {}

  findAll(): Promise<Team[]> {
    return this.teamRepository.findAll();
  }
}
