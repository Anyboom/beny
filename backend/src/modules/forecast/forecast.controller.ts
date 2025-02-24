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
  create(
    @Body() createForecastDto: CreateForecastDto,
  ): Promise<ForecastEntity> {
    return this.forecastService.create(createForecastDto);
  }

  @ApiResponse({
    type: ForecastEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<ForecastEntity[]> {
    return this.forecastService.findAll();
  }

  @ApiResponse({
    type: ForecastEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<ForecastEntity> {
    return this.forecastService.findOne(id);
  }

  @ApiResponse({
    type: ForecastEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateForecastDto: UpdateForecastDto,
  ): Promise<ForecastEntity> {
    return this.forecastService.update(id, updateForecastDto);
  }

  @ApiResponse({
    type: ForecastEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<ForecastEntity> {
    return this.forecastService.remove(id);
  }
}
