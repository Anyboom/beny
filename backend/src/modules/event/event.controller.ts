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
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { EventEntity } from '@/modules/event/entities/event.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { plainToInstance } from 'class-transformer';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiResponse({
    type: EventEntity,
    status: 201,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createEventDto: CreateEventDto): Promise<EventEntity> {
    return plainToInstance(
      EventEntity,
      await this.eventService.create(createEventDto),
    );
  }

  @ApiResponse({
    type: EventEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<EventEntity[]> {
    return this.eventService.findAll();
  }

  @ApiResponse({
    type: EventEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EventEntity> {
    return this.eventService.findOne(id);
  }

  @ApiResponse({
    type: EventEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<EventEntity> {
    return this.eventService.update(id, updateEventDto);
  }

  @ApiResponse({
    type: EventEntity,
    status: 200,
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<EventEntity> {
    return this.eventService.remove(id);
  }
}
