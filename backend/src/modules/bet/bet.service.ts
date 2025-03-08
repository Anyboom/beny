import { Injectable } from '@nestjs/common';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { QueryPaginationDto } from '@/utilities/pagination/dto/pagination.dto';
import { paginate } from '@/utilities/pagination/pagination.utility';
import { Bet } from '@prisma/client';

@Injectable()
export class BetService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBetDto: CreateBetDto): Promise<Bet> {
    return this.prismaService.bet.create({
      data: {
        ...createBetDto,
        events: {
          create: createBetDto.events,
        },
      },
      include: {
        user: true,
        events: true,
      },
    });
  }

  async findPaginate(
    where?: Record<string, string>,
    query?: QueryPaginationDto,
  ): Promise<[Bet[], number]> {
    const [posts, total] = await Promise.all([
      await this.prismaService.bet.findMany({
        include: {
          user: true,
          events: true,
        },
        where: where,
        ...paginate(query),
      }),
      await this.prismaService.bet.count({
        where: where,
      }),
    ]);

    return [posts, total];
  }

  findAll(): Promise<Bet[]> {
    return this.prismaService.bet.findMany({
      include: {
        user: true,
        events: true,
      },
    });
  }

  findOne(id: string): Promise<Bet> {
    return this.prismaService.bet.findFirstOrThrow({
      where: {
        id: id,
      },
      include: {
        user: true,
        events: true,
      },
    });
  }

  update(id: string, updateBetDto: UpdateBetDto): Promise<Bet> {
    return this.prismaService.bet.update({
      where: {
        id: id,
      },
      data: {
        ...updateBetDto,
        events: {
          create: updateBetDto.events,
        },
      },
      include: {
        user: true,
        events: true,
      },
    });
  }

  remove(id: string): Promise<Bet> {
    return this.prismaService.bet.delete({
      where: {
        id: id,
      },
      include: {
        user: true,
        events: true,
      },
    });
  }
}
