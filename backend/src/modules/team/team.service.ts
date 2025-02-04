import { Injectable } from '@nestjs/common';
import { TeamRepository } from '@/repositories/team/team.repository';
import { TeamType } from '@/repositories/team/team.type';

@Injectable()
export class TeamService {
  constructor(private teamRepository: TeamRepository) {}

  findAll(): Promise<TeamType[]> {
    return this.teamRepository.findAll();
  }
}
