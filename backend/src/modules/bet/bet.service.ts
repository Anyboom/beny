import { Injectable } from '@nestjs/common';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { BetEntity } from '@/modules/bet/entities/bet.entity';
import { QueryPaginationDto } from '@/utilities/pagination/dto/pagination.dto';
import {
  paginate,
  PaginateOutput,
  paginateOutput,
} from '@/utilities/pagination/pagination.utility';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BetService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBetDto: CreateBetDto): Promise<BetEntity> {
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
  ): Promise<PaginateOutput<BetEntity>> {
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

    return paginateOutput<BetEntity>(
      plainToInstance(BetEntity, posts),
      total,
      query,
    );
  }

  findAll(): Promise<BetEntity[]> {
    return this.prismaService.bet.findMany({
      include: {
        user: true,
        events: true,
      },
    });
  }

  findOne(id: string): Promise<BetEntity> {
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

  update(id: string, updateBetDto: UpdateBetDto): Promise<BetEntity> {
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

  remove(id: string): Promise<BetEntity> {
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
