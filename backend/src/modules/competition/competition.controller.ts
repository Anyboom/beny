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
import { CompetitionService } from './competition.service';
import { CreateCompetitionDto } from './dto/create-competition.dto';
import { UpdateCompetitionDto } from './dto/update-competition.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CompetitionEntity } from '@/modules/competition/entities/competition.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}

  @ApiResponse({
    type: CompetitionEntity,
    status: 201,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createCompetitionDto: CreateCompetitionDto,
  ): Promise<CompetitionEntity> {
    return plainToInstance(
      CompetitionEntity,
      await this.competitionService.create(createCompetitionDto),
    );
  }

  @ApiResponse({
    type: CompetitionEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<CompetitionEntity[]> {
    return plainToInstance(
      CompetitionEntity,
      await this.competitionService.findAll(),
    );
  }

  @ApiResponse({
    type: CompetitionEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CompetitionEntity> {
    return plainToInstance(
      CompetitionEntity,
      await this.competitionService.findOne(id),
    );
  }

  @ApiResponse({
    type: CompetitionEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCompetitionDto: UpdateCompetitionDto,
  ): Promise<CompetitionEntity> {
    return plainToInstance(
      CompetitionEntity,
      await this.competitionService.update(id, updateCompetitionDto),
    );
  }

  @ApiResponse({
    type: CompetitionEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CompetitionEntity> {
    return plainToInstance(
      CompetitionEntity,
      await this.competitionService.remove(id),
    );
  }
}
