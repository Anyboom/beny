import { Injectable } from '@nestjs/common';
import { EventRepository } from '@/repositories/event/event.repository';
import { EventType } from '@/repositories/event/event.type';

@Injectable()
export class EventService {
  constructor(private eventRepository: EventRepository) {}

  findAll(): Promise<EventType[]> {
    return this.eventRepository.findAll();
  }
}
