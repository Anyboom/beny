import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { EventType } from '@/repositories/event/event.type';

@Injectable()
export class EventRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<EventType[]> {
    return this.prismaService.event.findMany();
  }
}
