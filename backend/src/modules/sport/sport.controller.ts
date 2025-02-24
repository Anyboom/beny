import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SportService } from './sport.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { ApiResponse } from '@nestjs/swagger';
import { SportEntity } from '@/modules/sport/entities/sport.entity';

@Controller('sport')
export class SportController {
  constructor(private readonly sportService: SportService) {}

  @ApiResponse({
    type: SportEntity,
    status: 201,
  })
  @Post()
  create(@Body() createSportDto: CreateSportDto): Promise<SportEntity> {
    return this.sportService.create(createSportDto);
  }

  @ApiResponse({
    type: SportEntity,
    status: 200,
  })
  @Get()
  findAll(): Promise<SportEntity[]> {
    return this.sportService.findAll();
  }

  @ApiResponse({
    type: SportEntity,
    status: 200,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<SportEntity> {
    return this.sportService.findOne(id);
  }

  @ApiResponse({
    type: SportEntity,
    status: 200,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSportDto: UpdateSportDto,
  ): Promise<SportEntity> {
    return this.sportService.update(id, updateSportDto);
  }

  @ApiResponse({
    type: SportEntity,
    status: 200,
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<SportEntity> {
    return this.sportService.remove(id);
  }
}
