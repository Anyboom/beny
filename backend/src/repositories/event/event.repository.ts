import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { Event } from '@prisma/client';

@Injectable()
export class EventRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<Event[]> {
    return this.prismaService.event.findMany();
  }
}
