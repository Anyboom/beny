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
import { plainToInstance } from 'class-transformer';

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
  async create(@Body() createTeamDto: CreateTeamDto): Promise<TeamEntity> {
    return plainToInstance(
      TeamEntity,
      await this.teamService.create(createTeamDto),
    );
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<TeamEntity[]> {
    return plainToInstance(TeamEntity, await this.teamService.findAll());
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TeamEntity> {
    return plainToInstance(TeamEntity, await this.teamService.findOne(id));
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<TeamEntity> {
    return plainToInstance(
      TeamEntity,
      await this.teamService.update(id, updateTeamDto),
    );
  }

  @ApiResponse({
    type: TeamEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<TeamEntity> {
    return plainToInstance(TeamEntity, await this.teamService.remove(id));
  }
}
