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
import { ForecastService } from './forecast.service';
import { CreateForecastDto } from './dto/create-forecast.dto';
import { UpdateForecastDto } from './dto/update-forecast.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { ForecastEntity } from '@/modules/forecast/entities/forecast.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';

@Controller('forecast')
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @ApiResponse({
    type: ForecastEntity,
    status: 201,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createForecastDto: CreateForecastDto,
  ): Promise<ForecastEntity> {
    return plainToInstance(
      ForecastEntity,
      await this.forecastService.create(createForecastDto),
    );
  }

  @ApiResponse({
    type: ForecastEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<ForecastEntity[]> {
    return plainToInstance(
      ForecastEntity,
      await this.forecastService.findAll(),
    );
  }

  @ApiResponse({
    type: ForecastEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ForecastEntity> {
    return plainToInstance(
      ForecastEntity,
      await this.forecastService.findOne(id),
    );
  }

  @ApiResponse({
    type: ForecastEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateForecastDto: UpdateForecastDto,
  ): Promise<ForecastEntity> {
    return plainToInstance(
      ForecastEntity,
      await this.forecastService.update(id, updateForecastDto),
    );
  }

  @ApiResponse({
    type: ForecastEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ForecastEntity> {
    return plainToInstance(
      ForecastEntity,
      await this.forecastService.remove(id),
    );
  }
}
