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
  create(
    @Body() createCompetitionDto: CreateCompetitionDto,
  ): Promise<CompetitionEntity> {
    return this.competitionService.create(createCompetitionDto);
  }

  @ApiResponse({
    type: CompetitionEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<CompetitionEntity[]> {
    return this.competitionService.findAll();
  }

  @ApiResponse({
    type: CompetitionEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<CompetitionEntity> {
    return this.competitionService.findOne(id);
  }

  @ApiResponse({
    type: CompetitionEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompetitionDto: UpdateCompetitionDto,
  ): Promise<CompetitionEntity> {
    return this.competitionService.update(id, updateCompetitionDto);
  }

  @ApiResponse({
    type: CompetitionEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<CompetitionEntity> {
    return this.competitionService.remove(id);
  }
}
