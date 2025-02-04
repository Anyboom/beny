import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services/prisma/prisma.service';
import { SportType } from '@/repositories/sport/sport.type';

@Injectable()
export class SportRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<SportType[]> {
    return this.prismaService.sport.findMany();
  }
}
