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
import { BetService } from './bet.service';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { BetEntity } from '@/modules/bet/entities/bet.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';

@Controller('bet')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @ApiResponse({
    type: BetEntity,
    status: 201,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBetDto: CreateBetDto): Promise<BetEntity> {
    return this.betService.create(createBetDto);
  }

  @ApiResponse({
    type: BetEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<BetEntity[]> {
    return this.betService.findAll();
  }

  @ApiResponse({
    type: BetEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<BetEntity> {
    return this.betService.findOne(id);
  }

  @ApiResponse({
    type: BetEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBetDto: UpdateBetDto,
  ): Promise<BetEntity> {
    return this.betService.update(id, updateBetDto);
  }

  @ApiResponse({
    type: BetEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<BetEntity> {
    return this.betService.remove(id);
  }
}
