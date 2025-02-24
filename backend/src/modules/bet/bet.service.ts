import { Injectable } from '@nestjs/common';
import { CreateBetDto } from './dto/create-bet.dto';
import { UpdateBetDto } from './dto/update-bet.dto';
import { PrismaService } from '@/services/prisma/prisma.service';
import { BetEntity } from '@/modules/bet/entities/bet.entity';

@Injectable()
export class BetService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBetDto: CreateBetDto): Promise<BetEntity> {
    return this.prismaService.bet.create({
      data: createBetDto,
    });
  }

  findAll(): Promise<BetEntity[]> {
    return this.prismaService.bet.findMany();
  }

  findOne(id: string): Promise<BetEntity> {
    return this.prismaService.bet.findFirstOrThrow({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateBetDto: UpdateBetDto): Promise<BetEntity> {
    return this.prismaService.bet.update({
      where: {
        id: id,
      },
      data: updateBetDto,
    });
  }

  remove(id: string): Promise<BetEntity> {
    return this.prismaService.bet.delete({
      where: {
        id: id,
      },
    });
  }
}
