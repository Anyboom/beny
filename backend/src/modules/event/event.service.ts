import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { EventEntity } from '@/modules/event/entities/event.entity';

@Injectable()
export class EventService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createEventDto: CreateEventDto): Promise<EventEntity> {
    return this.prismaService.event.create({
      data: createEventDto,
    });
  }

  findAll(): Promise<EventEntity[]> {
    return this.prismaService.event.findMany();
  }

  findOne(id: string): Promise<EventEntity> {
    return this.prismaService.event.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateEventDto: UpdateEventDto): Promise<EventEntity> {
    return this.prismaService.event.update({
      where: {
        id: id,
      },
      data: updateEventDto,
    });
  }

  remove(id: string): Promise<EventEntity> {
    return this.prismaService.event.delete({
      where: {
        id: id,
      },
    });
  }
}
