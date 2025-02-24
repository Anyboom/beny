import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiResponse } from '@nestjs/swagger';
import { TeamEntity } from '@/modules/team/entities/team.entity';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiResponse({
    type: TeamEntity,
    status: 201,
  })
  @Post()
  create(@Body() createTeamDto: CreateTeamDto): Promise<TeamEntity> {
    return this.teamService.create(createTeamDto);
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @Get()
  findAll(): Promise<TeamEntity[]> {
    return this.teamService.findAll();
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<TeamEntity> {
    return this.teamService.findOne(id);
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<TeamEntity> {
    return this.teamService.update(id, updateTeamDto);
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<TeamEntity> {
    return this.teamService.remove(id);
  }
}
