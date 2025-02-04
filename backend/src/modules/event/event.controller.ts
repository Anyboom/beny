import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { EventType } from '@/repositories/event/event.type';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAll(): Promise<EventType[]> {
    return this.eventService.findAll();
  }
}
