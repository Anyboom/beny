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
import { SportService } from './sport.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { SportEntity } from '@/modules/sport/entities/sport.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';

@Controller('sport')
export class SportController {
  constructor(private readonly sportService: SportService) {}

  @ApiResponse({
    type: SportEntity,
    status: 201,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createSportDto: CreateSportDto): Promise<SportEntity> {
    return plainToInstance(
      SportEntity,
      await this.sportService.create(createSportDto),
    );
  }

  @ApiResponse({
    type: SportEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<SportEntity[]> {
    return plainToInstance(SportEntity, await this.sportService.findAll());
  }

  @ApiResponse({
    type: SportEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SportEntity> {
    return plainToInstance(SportEntity, await this.sportService.findOne(id));
  }

  @ApiResponse({
    type: SportEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSportDto: UpdateSportDto,
  ): Promise<SportEntity> {
    return plainToInstance(
      SportEntity,
      await this.sportService.update(id, updateSportDto),
    );
  }

  @ApiResponse({
    type: SportEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<SportEntity> {
    return plainToInstance(SportEntity, await this.sportService.remove(id));
  }
}
