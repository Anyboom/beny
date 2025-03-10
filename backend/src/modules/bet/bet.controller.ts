import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { BetService } from './bet.service';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { BetEntity } from '@/modules/bet/entities/bet.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';
import { QueryPaginationDto } from '@/utilities/pagination/dto/pagination.dto';
import { Authorized } from '@/modules/auth/decorators/authorized.decorator';
import {
  PaginateOutput,
  paginateOutput,
} from '@/utilities/pagination/pagination.utility';

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
  async create(@Body() createBetDto: CreateBetDto): Promise<BetEntity> {
    return plainToInstance(
      BetEntity,
      await this.betService.create(createBetDto),
    );
  }

  @ApiResponse({
    type: BetEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<BetEntity[]> {
    return plainToInstance(BetEntity, await this.betService.findAll());
  }

  @ApiResponse({
    type: PaginateOutput<BetEntity>,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('paginate')
  async findPaginate(
    @Authorized('id') userId: string,
    @Query() query?: QueryPaginationDto,
  ) {
    const [posts, total] = await this.betService.findPaginate(
      { userId: userId },
      query,
    );

    return paginateOutput<BetEntity>(
      plainToInstance(BetEntity, posts),
      total,
      query,
    );
  }

  @ApiResponse({
    type: BetEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BetEntity> {
    return plainToInstance(BetEntity, await this.betService.findOne(id));
  }

  @ApiResponse({
    type: BetEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBetDto: UpdateBetDto,
  ): Promise<BetEntity> {
    return plainToInstance(
      BetEntity,
      await this.betService.update(id, updateBetDto),
    );
  }

  @ApiResponse({
    type: BetEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<BetEntity> {
    return plainToInstance(BetEntity, await this.betService.remove(id));
  }
}
