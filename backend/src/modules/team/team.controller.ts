import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { TeamEntity } from '@/modules/team/entities/team.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiResponse({
    type: TeamEntity,
    status: 201,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTeamDto: CreateTeamDto): Promise<TeamEntity> {
    return this.teamService.create(createTeamDto);
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<TeamEntity[]> {
    return this.teamService.findAll();
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<TeamEntity> {
    return this.teamService.findOne(id);
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
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
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<TeamEntity> {
    return this.teamService.remove(id);
  }
}
