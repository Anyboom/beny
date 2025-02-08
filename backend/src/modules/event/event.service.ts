import { Injectable } from '@nestjs/common';
import { EventRepository } from '@/repositories/event/event.repository';
import { Event } from '@prisma/client';

@Injectable()
export class EventService {
  constructor(private eventRepository: EventRepository) {}

  findAll(): Promise<Event[]> {
    return this.eventRepository.findAll();
  }
}
