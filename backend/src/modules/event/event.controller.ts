import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from '@prisma/client';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }
}
